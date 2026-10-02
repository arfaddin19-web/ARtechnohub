export const dynamic = "force-static";

import type { MetadataRoute } from "next";

const BASE_URL = "https://artechnohub.com.np";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/products/",
    "/inventory-management-software/",
    "/payroll-software-nepal/",
    "/spa-salon-software/",
    "/banquet-management-software/",
    "/hotel-pos-software/",
    "/hotel-management-software/",
    "/billing-software-nepal/",
    "/pos-software-nepal/",
    "/restaurant-pos-software/",
    "/products/masterpos/",
    "/products/hotel/",
    "/products/spa/",
    "/products/banquet/",
    "/products/hr-payroll/",
    "/hardware/",
    "/about/",
    "/contact/",
    "/pricing/",
  ];

  return routes.map((route) => ({
    url: BASE_URL + route,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/products/") ? 0.9 : 0.7,
  }));
}
