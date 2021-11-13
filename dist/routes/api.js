"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = void 0;
const axios_1 = __importDefault(require("axios"));
const api = (app) => {
    // @route   GET api/getList
    // @param   No parameter is required for this API & it will return an array of objects
    // @desc    Get data from OData
    // @access  Public - No auth
    app.get(`/api/getList`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            // OData API for Requesting EntitySet
            const response = yield axios_1.default.get(`https://services.odata.org/TripPinRESTierService/People`);
            const { data: { value: list }, } = response;
            return res.json(list);
        }
        catch (err) {
            // tslint:disable-next-line:no-console
            console.error(err);
            res.json({ error: err.message || err });
        }
    }));
    // @route   GET api/search
    // @param   Username is required for this API & it will return an objects
    // @desc    Get data from OData for single entity
    // @access  Public - No auth
    app.get(`/api/search`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            // URL contruction for parsing searched url
            const url = new URL(req.protocol + "://" + req.get("host") + req.originalUrl);
            const searchedName = url.searchParams.get("search");
            // OData API for Requesting EntitySet
            const response = yield axios_1.default.get(`https://services.odata.org/TripPinRESTierService/People('${searchedName}')`);
            const { data: result } = response;
            return res.json(result);
        }
        catch (err) {
            // tslint:disable-next-line:no-console
            console.error(err);
            res.json({ error: err.message || err });
        }
    }));
};
exports.api = api;
//# sourceMappingURL=api.js.map