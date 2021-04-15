"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        res.json({ text: 'api/name-api' });
    }
}
exports.indexController = new IndexController();
