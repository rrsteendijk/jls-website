document.addEventListener('DOMContentLoaded', function() {
 const images = [
    'https://img.freepik.com/vecteurs-premium/licorne-magique-mignonne-marchant-nuages-arc-ciel_29190-5400.jpg?w=740',
    'https://img.freepik.com/vecteurs-libre/adorable-licorne-rose-etoiles_1308-146486.jpg?w=826&t=st=1702322580~exp=1702323180~hmac=3c0e5da2aa10ace5ad36219af5f85c5d8971bd9f5c90ed02b5efb7c83729e58a',
    'https://img.freepik.com/vecteurs-libre/conception-fond-licorne_1324-79.jpg?w=740&t=st=1702322603~exp=1702323203~hmac=859105128e7e324c167120995a63c1847fd76d44c193838bfa19cc7f9d47f6a7'
];
    const dailyImage = document.getElementById('dailyImage');
    const todaysImage = images[new Date().getDate() % images.length];
    dailyImage.src = todaysImage;
});
