import getAPIClient from "./APIClient";

export async function getProducts() {
    let getProductsPromise = {succeded: false};

        await getAPIClient().request(
            "GET",
            "items",
            {},
            {}
         ).then((response) => {
            getProductsPromise.succeded = true;
            getProductsPromise.data = response.data.data;
            getProductsPromise.requestStatus = response.status;
         }).catch((error) => {
            getProductsPromise.succeded = false;
            console.log(error);
         });

         return new Promise(resolve => resolve(getProductsPromise));
};

export async function postProduct() {
   let postProductsPromise = {succeded: false};

       await getAPIClient().request(
           "POST",
           "families?noPagination=true",
           {
            // name: data.name,
            // date: data.date
           },
           {}
        ).then((response) => {
           postProductsPromise.succeded = true;
           postProductsPromise.data = response.data.data;
           postProductsPromise.requestStatus = response.status;
        }).catch((error) => {
           postProductsPromise.succeded = false;
           console.log(error);
        });

        return new Promise<postProductsPromise>(resolve => resolve(postProductsPromise));
};

