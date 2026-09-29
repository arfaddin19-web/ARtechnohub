# MasterPOS (localhost:5285) — Feature & Design Reference

Reference snapshot for the NEW software we are building. Derived from the live
app's actual API surface (extracted from its frontend bundle, verified via
`admin` login on 2026-09-24) plus the earlier design docs
(`D:\PROJECTPOS\PROJECT_HANDOFF.md`, `D:\POSSUITE\UI_SCREEN_LIST.md`).

The live app is **significantly richer than the old handoff docs** — it now
includes Workforce (Attendance/Payroll, previously "not built yet"), a full
Accounts module, Stock Transfer, Members, and Discount Offers. Where the docs
and the live app differ, **the live app is treated as the reference**.

---

## 1. Product Concept & Business Model (from handoff — unchanged)

- Restaurant/cafe-focused POS (not generic retail).
- Three sellable products (POS / ERP / Payroll) from one shared codebase,
  gated by modular licensing (`License` + `LicenseFeature`, checked at login
  and at the API layer).
- Two access tiers:
  - **Client Admin** — operations, permission-configurable via Roles.
  - **Vendor Super Admin** — sensitive config (Company Profile, Print
    Settings, Fiscal Year, Tax Settings, License) is hardcoded out of the
    client's reach, NOT merely permission-gated. This is a business-model
    protection and must be preserved.
- Deployment: SQL Server Express on-site (offline-capable), sync to central
  MSSQL. One database per client, schema-separated (`core` / `pos` / `erp` /
  `payroll`).

## 2. Tech Stack (as observed in the live app)

- Backend: ASP.NET Core Web API (JWT bearer auth, 12-hour tokens; issuer
  "MasterPOS", audience "MasterPOS.Client"). Swagger exposed at
  `/swagger/v1/swagger.json`.
- Frontend: React + Vite SPA, PWA (manifest, service worker `sw.js`,
  apple-touch icons), light/dark theme with `localStorage` key
  `masterpos.theme` and no-flash bootstrap script. Theme color `#f3edea`.
- Multi-company/multi-branch: login response carries `companyId` +
  `defaultBranchId`; permissions are module/feature/action-level
  (`canView/Create/Edit/Delete/Print/Approve`).
- API base: `/api` (frontend axios baseURL).

## 3. Navigation / Dashboard Shell

Sidebar groups observed in the live app (module names from the permission
list): **Masters, Transactions, Billing/POS, Accounts, Inventory, Workforce,
Reports, Settings, Utilities, Users**.

Menu rendering is filtered by (a) the user's role permissions and (b) license
ProductAreas. Vendor Super Admin sees vendor-only screens.

## 4. Feature Modules (live API surface)

### Masters (`/api/masters/*`)
- Products (CRUD + `/bom` recipe lines per product)
- BOM (recipe listing)
- Categories (hierarchical: Category + optional Sub-category)
- Groups (ProductGroup), Units (multi-unit, per-unit independent Dine-in /
  Takeaway / Purchase rates and Conversion-to-base)
- Parties (suppliers; `/active`, `/member`, `/redeem-points` — parties double
  as Members/loyalty customers)
- Members (loyalty)
- Tables (Table/Floor master)
- Terminals (POS terminals, active toggle)
- Warehouses (multi-warehouse stock)
- Discount Offers (`/api/sales/discount-offers`, active toggle)

### Transactions (`/api/transactions/*` UI: purchase, purchase-return,
opening-stock, stock-adjustment, stock-transfer)
- Purchase invoices: header + line grid, next-number, lines, payments,
  post, cancel.
- Purchase returns: reference bill, returnable-items lookup, post, cancel.
- Stock adjustment: count-sheet, next-number, post.
- Stock transfer: warehouse-to-warehouse, lines, post, confirm, cancel.
- Opening stock: per fiscal year, post, carry-forward.

### Billing / POS (`/api/billing`, `/api/sales/*`, `/api/pos-sessions/*`)
- Orders: create (`/order`), lines, merge, split, transfer (table move),
  hold, resume, note.
- KOT: incremental send (only pending items), reprint, cancelled-KOT
  tracking (`bill-serial-state`, `/kitchen` screen).
- Discounts: manual discount or apply Discount Offer per order.
- Payments: per-order payments (partial/advance payments, split across
  multiple payment modes per installment), void individual payments.
- Billing close (`close-bill`), register invoice print, sales returns
  (`/sales/returns` with billable lookup, register print).
- POS sessions: open/close/reopen/summary — cash-drawer session management.
- Business days: `/business-days` end/reopen/summary = the Day End flow
  (blocked while open bills exist; cash reconciliation expected vs counted).

### Accounts (`/api/accounts/*`, `/api/accounting/*`)
- Chart of accounts (`group`/`ledger`/`sub-ledger`), seed-defaults endpoint.
- Vouchers: Payment Voucher, Receipt Voucher, Journal Voucher (post/void).
- Party payments (`/accounting/party-payments`), reconciliation (bank +
  party), balance confirmation.

### Workforce (`/api/workforce/*`) — Payroll/HR, now fully built
- Employees, departments, contracts.
- Attendance: check-in, mark, today, monthly review/update, finalize, reopen.
- Shifts + Shift Roster (individual + bulk).
- Leave requests: approve/reject/cancel.
- Salary components, salary structure (+ apply-all).
- Advances (+ recover).
- Payroll runs: calculate → review → recompute → approve → pay → payslips;
  bank-accounts export; cancel. Exit settlement.

### Reports (`/api/reports/*`) — every summary is drillable to detail
- Sales: sales-book, sales-summary, sales-itemwise, sales-collection,
  sales-return, sales-profitability, sales-ranking, **sales-forecast**,
  recipe-sourcing.
- Purchase: purchase-book, purchase-summary, purchase-itemwise,
  purchase-return, purchase-book.
- KOT: kot-history, kot-cancelled, kot-timeline, kot-product-search.
- Inventory: stock-summary, stock-ledger, reorder, stock-valuation,
  bom-recipe.
- Accounts: cash-book, bank-book, ledger, party-ledger, trial-balance,
  profit-loss, balance-sheet, journal-register, debtors-creditors,
  bank-reconciliation, tds-register, balance-confirmation.
- VAT (Nepal IRD format): vat-sales, vat-purchase, vat-sales-return,
  vat-purchase-return, vat-summary, tax-register, audit-trail,
  materialized-view.
- Payroll: attendance-register, payroll-sheet, advances-report.

### Users & Settings
- `/api/users`: users, roles, pos-permissions (action-level permission
  matrix: View/Create/Edit/Delete/Print/Approve per module-feature).
- `/api/settings`: company-profile, fiscal-years (create/set-current),
  PIN (status/verify — staff app), print-formats.

### Utilities
- Payment Modes (+ auto-linked ledger account; **FonePay dynamic QR**
  generation + status polling).
- Printers (print destination assignment).
- Backups (list, download) / Restore.
- Import/Export (bulk Excel).
- Audit log (+ per-record change history).

### Auth
- `/api/auth/login` (username/password), `/auth/roles`, `/auth/users` CRUD +
  reset-password + active toggle. PIN login for staff app.
- Permission payload returned at login: module → feature → action flags.

## 5. Design/UX Notes (from live app + docs)

- PWA, installable, mobile-friendly (`viewport-fit=cover`, no-zoom).
- Light/dark theme toggle, persisted; warm off-white light theme (#f3edea).
- Table layout grid color-coded: Green Available / Red Occupied /
  Amber Partially Paid / Blue Reserved / Grey Billed.
- Reports pattern: summary → drilldown to detail/ledger; date-range +
  entity filters; export/print actions.
- Numbered document flow everywhere (next-number endpoints): invoices,
  returns, adjustments, transfers — sequential numbering with void/cancel
  rather than delete.
- Lifecycle pattern: drafts → post → (cancel/void) with audit trail, rather
  than hard deletes.
- Session-based POS: open session required to bill; business-day (Day End)
  gates session close.

## 6. Decisions to Preserve in the New Software

1. Vendor-only screens (Company Profile, Print Settings, Fiscal Year, Tax,
   License) unreachable by any client role — never add permission checkboxes
   for them.
2. VAT/PAN bill-type rule: PAN = zero tax; VAT = 13% only on VAT-applicable
   lines; lines can mix.
3. 4 product types (RAW / INVENTORY / SERVICE / CONSUMABLE) with the rule
   matrix (SERVICE needs ≥1 BOM line; RAW/CONSUMABLE have no print
   destination; exactly one base unit).
4. Per-unit independent rates — never auto-multiply from base.
5. Takeaway rate covers Delivery (no separate delivery concept).
6. Partial/advance payments with per-installment multi-mode splits; only the
   final consolidated bill prints; force-close of shortfall is Admin-only
   with reason.
7. Day End blocked until all tables cleared; cash reconciliation included.
8. Incremental KOT (only unprinted items go out).
9. Double-entry accounting under everything; auto-created ledgers flagged
   (PARTY/CUSTOMER/PAYMENT_MODE) and read-only.
10. Stock adjustment posting to accounts is opt-in, never automatic.
11. Opening stock/balance are per-fiscal-year; year-end close/carry-forward
    is a separate process (carry-forward endpoint now exists).
12. Billing can proceed without a customer (walk-in).
