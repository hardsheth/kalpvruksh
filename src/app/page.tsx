import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {

  return (
   <div className="container-fluid">
    <div className="row">
    <img src="/asset/WhatsApp Image 2024-06-04 at 11.37.28_a95ac451.jpg" alt="Banner Image" className={styles.bannerimg} />
    </div>
    <div className="row row-cols-3 mt-2">
      <div className="col relative-position">
      <img src="/asset/WhatsApp Image 2024-06-04 at 11.37.29_13786939.jpg" alt="Side Image 1" className={`${styles.sideimg} animated-right`} />
      </div>
      <div className="col">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos cupiditate exercitationem magni repudiandae minima laborum tempore natus culpa maiores voluptates aut maxime veritatis, deleniti veniam debitis iure dolor dolores cumque, provident distinctio. Molestias commodi harum placeat tempore magni illo quos ab, dolor odio quibusdam expedita cumque officiis dolorum ea deleniti temporibus optio amet dolores incidunt id, possimus saepe! Id cupiditate quaerat quidem nihil dolorum quos veritatis similique incidunt illo, odio iure! Deserunt temporibus pariatur voluptate expedita reiciendis quae, impedit fugit cumque eum, veniam, dolores accusamus suscipit deleniti cupiditate saepe! Recusandae quo culpa, quae voluptates placeat deserunt porro alias mollitia molestias.</p>
      </div>
      <div className="col relative-position">
      <img src="/asset/WhatsApp Image 2024-06-04 at 11.37.29_ec055126.jpg" alt="Side Image 2" className={`${styles.sideimg} animated-left`} />
      </div>
    </div>
   </div>
  );
}
