const URL = "https://us-east-2.aws.neurelo.com/rest/products"
const APIKEY = "neurelo_9wKFBp874Z5xFw6ZCfvhXcbiu2z32e6f6VlioYXkSf62kyRdgtPcIVVIQZrNLN2lt0xFrVi8R4W0Xy0sclg2dhbS63EaSGBpyQYUofzj1bUbw7q0FF/9mYvN3YUNmUEtB1iGwfEjWr/K5sgaDeMd5KyERRttl/bRRXgi8KQx1oh9pBV84vf1v+3bsHh0KIhn_Y6O9Dhxjl+KWcfjNPEs4lUHwQ40wSrORa7vkCCb8rp4="

export  const getAllProducts = async () => {
    const url = URL;
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-API-Key': APIKEY,
        },
        // body: JSON.stringify({
        //     name: 'cake',
        //     tags: 'keto;dairy-free',
        //     includeIngredients: 'egg;butter',
        //     excludeIngredients: 'cinnamon',
        //     maxPrepareTime: 10,
        //     maxCookTime: 20,
        //     maxCalories: 500,
        //     maxNetCarbs: 5,
        //     maxSugar: 3,
        //     maxAddedSugar: 0,
        //     limit: 10
        // })
    };
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result.data
    } catch (error) {
        console.error(error);
    }
}


export default getAllProducts;

