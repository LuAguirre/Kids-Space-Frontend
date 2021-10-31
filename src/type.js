export const URLS = {
  DEV: "http://localhost:5500/api/",
  PROD: "PROD_URL",
};
export const URL = URLS.DEV;

export class Video {
  constructor({videoUrl, imageUrl, name, id}){
    this.uri = "video/" 
    this.videoUrl = videoUrl;
    this.imageUrl = imageUrl
    this.name = name;
    this.id = id;
  }
}

export const VIDEOS = [
  new Video({videoUrl: "videosKS/caleidoscopio.mp4", imageUrl: "img/caleidoscopioIMG.png", name: "Caleidoscopio",  id: 1}),
  new Video({videoUrl: "videosKS/cambioClimatico.mp4", imageUrl: "img/cambioclimaticoIMG.png", name: "Cambio Climatico", id: 2}),
  new Video({videoUrl: "videosKS/evolucionSeresHumanos.mp4", imageUrl: "img/evolucionhumanaIMG.png", name: "Evolucion Seres Humanos", id: 3}),
  new Video({videoUrl: "videosKS/luna.mp4", imageUrl: "img/queeslalunaIMG.png", name: "Luna", id: 4}),
  new Video({videoUrl: "videosKS/tecnicasPintura.mp4", imageUrl: "img/aprendepinturaIMG.png", name: "Teecnicas de Pintura", id: 5})
]

