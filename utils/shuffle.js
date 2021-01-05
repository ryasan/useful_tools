const shuffle = arr => {
    arr.sort(() => 1 - Math.floor(Math.random() * 3));
    return arr;
};
