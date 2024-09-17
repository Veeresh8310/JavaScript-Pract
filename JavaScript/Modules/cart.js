let cart=[];
export function addItem(item)
{
    cart.push(item);
}

export function removeItem(item)
{
    cart.filter(cartItem=>cartItem!==item);
};

export function getTotal()
{
    return cart.length;
}