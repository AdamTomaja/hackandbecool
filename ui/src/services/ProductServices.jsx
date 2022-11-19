import getAPIClient from "./APIClient";

export async function getProducts() {
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

export async function postProduct(data) {
   let postProductsPromise = {succeded: false};

       await getAPIClient().request(
           "POST",
           "items",
           {
            data: data
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

