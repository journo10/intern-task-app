import img_1 from "../images/jpg/img-1.jpg";
import img_2 from "../images/jpg/img-2.jpg";
import img_3 from "../images/jpg/img-3.jpg";

export const images = [img_1, img_2, img_3];

export const data = [
  {
    id: 1,
    title: "Customizable Modern T-shirt”",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, id esse ipsum officiis repellendus eos sapiente natus dolorum atque quibusdam illum, dolores culpa consequuntur provident assumenda eveniet delectus commodi vel recusandae, quia harum libero. Quam veritatis et ipsa ex quas sapiente! Voluptatibus iusto ex pariatur distinctio atque eligendi perferendis perspiciatis.",
    price: 109.99,
    image:img_1,
    sizes: [
      { id: 1, size: "S", price: 89.99 },
      { id: 2, size: "M", price: 99.99 },
      { id: 3, size: "L", price: 109.99 },
    ],
    colors: [
      { id: 1, color: "RED" },
      { id: 2, color: "BLUE" },
      { id: 3, color: "YELLOW" },
    ],
  },
];
