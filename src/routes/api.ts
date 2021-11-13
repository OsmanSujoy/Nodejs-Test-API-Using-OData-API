import * as express from "express";
import axios, { AxiosResponse } from "axios";

export const api = (app: express.Application) => {
  // @route   GET api/getList
  // @param   No parameter is required for this API & it will return an array of objects
  // @desc    Get data from OData
  // @access  Public - No auth
  app.get(`/api/getList`, async (req: any, res) => {
    try {
      // OData API for Requesting EntitySet
      const response: AxiosResponse = await axios.get(
        `https://services.odata.org/TripPinRESTierService/People`
      );
      const {
        data: { value: list },
      } = response;
      return res.json(list);
    } catch (err) {
      // tslint:disable-next-line:no-console
      console.error(err);
      res.json({ error: err.message || err });
    }
  });

  // @route   GET api/search
  // @param   Username is required for this API & it will return an objects
  // @desc    Get data from OData for single entity
  // @access  Public - No auth
  app.get(`/api/search`, async (req: any, res) => {
    try {
      // URL contruction for parsing searched url
      const url = new URL(
        req.protocol + "://" + req.get("host") + req.originalUrl
      );
      const searchedName = url.searchParams.get("search");
      // OData API for Requesting EntitySet
      const response: AxiosResponse = await axios.get(
        `https://services.odata.org/TripPinRESTierService/People('${searchedName}')`
      );
      const { data: result } = response;
      return res.json(result);
    } catch (err) {
      // tslint:disable-next-line:no-console
      console.error(err);
      res.json({ error: err.message || err });
    }
  });
};
