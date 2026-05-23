// Centralized image URLs for Home and Trainers pages.
// Update image paths here to change images across the site.
const images = {
  hero: 'https://images.pexels.com/photos/16996376/pexels-photo-16996376.jpeg',
  mag1: 'https://media.istockphoto.com/id/2027278927/fr/photo/jeune-femme-athl%C3%A9tique-faisant-de-lexercice-avec-des-halt%C3%A8res-lors-dun-entra%C3%AEnement-sportif.jpg?s=1024x1024&w=is&k=20&c=472oPp0AR2ST_U-r7GbeMjeUOYcxbhas9eP7gUo-2p4=',
  mag2: 'https://images.pexels.com/photos/29392546/pexels-photo-29392546.jpeg',
  mag3: 'https://images.pexels.com/photos/37570727/pexels-photo-37570727.jpeg',
  prog1: 'https://images.pexels.com/photos/15260187/pexels-photo-15260187.jpeg',
  prog2: 'https://images.pexels.com/photos/7293692/pexels-photo-7293692.jpeg',
  prog3: 'https://images.pexels.com/photos/27433192/pexels-photo-27433192.jpeg',
  trainersHero: 'https://images.pexels.com/photos/13451904/pexels-photo-13451904.jpeg',
}

const trainerImage = (id) => `https://picsum.photos/seed/tr${id}/600/400`;

export { images, trainerImage };
