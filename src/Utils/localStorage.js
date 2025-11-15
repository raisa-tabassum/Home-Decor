export const loadWishlist = () => {
  try {
    const data = localStorage.getItem("wishlist");
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.log(err);
    return [];
  }
};

// save
export const updateList = (product) => {
  const wishlist = loadWishlist();
  try {
    const isDuplicate = wishlist.some((p) => p.id === product.id);
    if (isDuplicate) return alert("Already added in wishlist");
    const updateWishList = [...wishlist, product];
    localStorage.setItem("wishlist", JSON.stringify(updateWishList));
  } catch (err) {
    console.log(err);
    return [];
  }
};

// delete
export const removeFromWishList = (id) => {
  const wishlist = loadWishlist();

  try {
    const updatedWishList = wishlist.filter((p) => p.id !== id);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishList));
  } catch (err) {
    console.log(err);
    return [];
  }
};
