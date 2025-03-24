export interface ITarjeta {
  id?: number;
  title: string;
  subtitle?: string;
  description: string;
  longDescription: string;
  background_image: string;
  button_text?: string;
  button_link?: string;
  enabled: boolean;
  images?: string[];
  videoId?: string;
  isShort?: string;
}
