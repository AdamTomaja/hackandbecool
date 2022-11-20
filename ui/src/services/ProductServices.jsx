import getAPIClient from "./APIClient";

export async function getProductsInStock() {
    let getProductsPromise = {succeded: false};

        await getAPIClient().request(
            "GET",
            "items/IN_STOCK",
            {},
            {}
         ).then((response) => {
            getProductsPromise.succeded = true;
            getProductsPromise.data = response.data;
            getProductsPromise.requestStatus = response.status;
         }).catch((error) => {
            getProductsPromise.succeded = false;
            console.log(error);
         });

         return new Promise(resolve => resolve(getProductsPromise));
};

export async function getProductsNeedToBuy() {
   let getProductsPromise = {succeded: false};

       await getAPIClient().request(
           "GET",
           "items/NEED_TO_BUY",
           {},
           {}
        ).then((response) => {
           getProductsPromise.succeded = true;
           getProductsPromise.data = response.data;
           getProductsPromise.requestStatus = response.status;
        }).catch((error) => {
           getProductsPromise.succeded = false;
           console.log(error);
        });

        return new Promise(resolve => resolve(getProductsPromise));
};

export async function getProductsOutOfStock() {
   let getProductsPromise = {succeded: false};

       await getAPIClient().request(
           "GET",
           "items/OUT_OF_STOCK",
           {},
           {}
        ).then((response) => {
           getProductsPromise.succeded = true;
           getProductsPromise.data = response.data;
           getProductsPromise.requestStatus = response.status;
        }).catch((error) => {
           getProductsPromise.succeded = false;
           console.log(error);
        });

        return new Promise(resolve => resolve(getProductsPromise));
};

export async function postProduct(data) {
   let postProductsPromise = {succeded: false};

       await getAPIClient().request(
           "POST",
           "items",
           {
             name: data.name,
             expirationDate: data.date,
             status: data.status
           },
           {}
        ).then((response) => {
           postProductsPromise.succeded = true;
           postProductsPromise.data = response.data
           postProductsPromise.requestStatus = response.status;
        }).catch((error) => {
           postProductsPromise.succeded = false;
           console.log(error);
        });

        return new Promise(resolve => resolve(postProductsPromise));
};

export async function postProductToInStock(id) {
   let postProductToInStockPromise = {succeded: false};

   console.log(id);

       await getAPIClient().request(
           "POST",
           `items/${id}`,
           {
           },
           {}
        ).then((response) => {
           postProductToInStockPromise.succeded = true;
           postProductToInStockPromise.data = response.data
           postProductToInStockPromise.requestStatus = response.status;
        }).catch((error) => {
          postProductToInStockPromise.succeded = false;
           console.log(error);
        });

        return new Promise(resolve => resolve(postProductToInStockPromise));
};

