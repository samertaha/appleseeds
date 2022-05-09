const getIDs = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([532, 543, 753, 1, 5]);
    }, 1500);
  });

const getRecipe = (recipeID) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      (ID) => {
        const recipe = {
          title: 'Fresh tomato pasta',
          publisher: 'Pinchas Hodadad',
        };
        resolve(`${ID}: ${recipe.title}`);
      },
      1500,
      recipeID
    );
  });
};

async function ids() {
  try {
    const id = await getIDs();
    console.log(id);
  } catch (error) {
    console.log(error);
  }
}

ids();
async function getit() {
  const it = await getRecipe(IDs[2]);
  console.log(it);
}
