import { MetadataRoute } from "next";

const siteUrl = "https://vinafc.vn";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: siteUrl,
            lastModified: new Date("2026-03-06"),
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: `${siteUrl}/#technology`,
            lastModified: new Date("2026-03-06"),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${siteUrl}/#education`,
            lastModified: new Date("2026-03-06"),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${siteUrl}/#partnerships`,
            lastModified: new Date("2026-03-06"),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${siteUrl}/#contact`,
            lastModified: new Date("2026-03-06"),
            changeFrequency: "monthly",
            priority: 0.7,
        },
    ];
}
