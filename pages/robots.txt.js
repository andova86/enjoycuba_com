import  { Component } from "react";

export default class Robots extends Component {
   static async getInitialProps({req, res}) {
        res.setHeader("Content-Type", "text/plain");
        res.write(`User-agent: *Disallow: Sitemap: https://www.imlc.me/sitemap.xml`);
        res.end();
    }
}