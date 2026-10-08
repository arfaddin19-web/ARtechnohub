export const dynamic = "force-static";

import type { MetadataRoute } from "next";
import { POSTS } from "./blog/posts";

const BASE_URL = "https://artechnohub.com.np";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/blog/",
    ...POSTS.map((post) => "/blog/" + post.slug + "/"),
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
    "/restaurant-management-software-pokhara/",
    "/restaurant-software-gandaki/",
    "/products/masterpos/",
    "/products/hotel/",
    "/products/spa/",
    "/products/banquet/",
    "/products/hr-payroll/",
    "/hardware/",
    "/hardware/pc/",
    "/hardware/thermal-printer/",
    "/hardware/thermal-rolls/",
    "/hardware/peripherals/",
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
