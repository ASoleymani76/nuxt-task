import Axios from "axios";
import {SitemapUrl} from "#sitemap/types";

export default defineSitemapEventHandler(async (e) => {
    let blogsData = [];
    try {
        const res = await Axios.get(
            `https://apiv2.simagar.com/api/v1/SiteMaps/GetSiteMap`,  // Use the correct endpoint here
        );
        blogsData = res.data.data.blogs; // Ensure the field matches the response structure
    } catch (e) {
        console.error("Error fetching portfolio sitemap data:", e);
    }
    return blogsData.map((p) => ({
        loc: p.url,
        changefreq: "weekly",
        priority: 1,
        lastmod: p.updateDate,
        _sitemap: 'blogs',
    })satisfies SitemapUrl);


});