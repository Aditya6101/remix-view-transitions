import { useParams } from "@remix-run/react";
import { blogs } from "~/data";

export default function Blogs() {
  const { slug } = useParams();
  const posterImage = blogs.find((blog) => blog.title === slug)?.posterImage;

  return (
    <div className="py-8 px-2">
      <div style={{ viewTransitionName: "blog-hero" }}>
        <img
          className="w-full h-96 object-cover pb-4"
          src={posterImage}
          alt={slug}
        />
        <h1 className="text-3xl font-bold font-serif pb-2 text-neutral-200">
          {slug}
        </h1>
        <time className="text-base font-bold font-mono text-neutral-500">
          Published on - 21 Oct, 2023
        </time>
      </div>
      <p className="text-neutral-200">
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam magni
        quia ipsa recusandae, voluptatibus sapiente ratione corporis cum dolor
        quis veniam laudantium repellat minima temporibus, vitae placeat non
        repellendus in. Itaque, placeat? Id rem optio eum velit iure vitae
        placeat praesentium quibusdam, quam doloremque cupiditate sed.
        <br />
        <br />
        Repellendus eum tempore quasi, iusto aspernatur, cum magnam saepe
        quaerat error deserunt sequi beatae. Repellat recusandae molestiae
        quidem, provident minus quo, architecto nemo ullam sapiente nisi
        excepturi! Aliquam, eos laboriosam hic iure mollitia eligendi cum
        quaerat quo! Amet natus fuga officia ex animi libero! Obcaecati at
        explicabo ratione. Quos non deserunt quis quo soluta, ut, impedit unde
        libero eum, nobis atque odio mollitia iure doloremque dolore dignissimos
        quisquam. Quasi in nam exercitationem eum incidunt! Voluptatum aut harum
        asperiores voluptate saepe alias veritatis eius sapiente! Officia
        excepturi iure consequuntur et officiis dicta quisquam ad perspiciatis,
        sapiente id itaque incidunt reiciendis, voluptatibus vel, beatae porro
        sed! Accusamus, suscipit aspernatur labore atque exercitationem tempora
        adipisci quam amet sit sequi aliquam officiis, voluptas, molestias vel
        tenetur nobis eligendi sunt mollitia velit.
        <br />
        <br />
        Eos distinctio, nam saepe veritatis dolore nulla. Ad, deserunt in.
        Omnis, ducimus consequuntur non, eos optio neque quos fugiat, asperiores
        blanditiis officia tempora iste dicta error corrupti nam perspiciatis
        ad! Quas, consectetur eos pariatur magnam itaque laborum. Numquam porro
        suscipit modi reiciendis ut molestias minima deserunt rem aspernatur non
        blanditiis voluptas, accusamus quaerat iusto fuga sed eligendi maxime
        officiis, illum, corrupti natus tempore praesentium! Soluta, ex
        reprehenderit! Ipsum et excepturi architecto, ullam itaque non
        aspernatur, rerum facere aliquid cupiditate voluptatibus esse nam
        expedita tempora unde fugiat accusamus! Harum, possimus eveniet beatae
        dolores et voluptatibus autem perferendis dignissimos. Voluptates eum
        maiores odit asperiores quasi veniam cum explicabo cupiditate vitae illo
        necessitatibus ad quidem, omnis quod, tempore reiciendis exercitationem
        ipsam aperiam vel nostrum porro, voluptatem dolor voluptate voluptas!
        Quaerat.
        <br />
        <br />
        Adipisci impedit natus eum neque quam odio? Eum, beatae qui quasi
        similique cumque, quia consectetur quibusdam maiores alias temporibus
        aliquid autem nobis nam tenetur, ab iste sit quam dicta iure? Asperiores
        porro animi debitis, rerum mollitia facere odit repellat fugiat impedit
        et aliquam eius, veniam est corporis quos placeat inventore doloremque
        nulla magnam unde sunt, architecto error commodi quisquam? A. Aliquam
        libero omnis a. Aspernatur ratione totam quisquam, modi quidem
        voluptates consequuntur non minima cumque neque, est temporibus aut
        porro deleniti? Quasi hic obcaecati aspernatur, ex quisquam reiciendis!
        Quaerat, quo! Natus illo tempore magni, nisi cum dolorum ea ab neque
        nesciunt? Labore nulla ad dolor necessitatibus, officiis eum nisi
        possimus similique illum numquam, quis voluptate praesentium! Quibusdam
        perspiciatis aut numquam? Ex excepturi nobis quis rerum perspiciatis
        quam commodi, itaque inventore laudantium corrupti soluta qui! Libero
        perferendis cumque nam maiores maxime. Animi nam vel saepe ut incidunt
        labore nisi voluptas harum? Pariatur veritatis neque repellendus. At
        molestiae ipsam sequi alias earum aliquam voluptate itaque consectetur
        magnam expedita dignissimos illo maiores sapiente, aut quibusdam
        doloremque est, laborum explicabo, ducimus quia rem nemo? Tenetur vel
        non quidem molestiae obcaecati molestias laboriosam at rerum, cupiditate
        impedit, ducimus, modi natus facere reprehenderit et sit architecto
        veniam vero cum nemo sint doloremque! Iure repellendus eveniet ad.
        Fugiat rem nulla numquam, modi ullam doloribus animi non, consequuntur
        minus eum hic fuga veniam iure veritatis corrupti obcaecati voluptatibus
        laboriosam voluptates soluta sed molestias rerum. Consequuntur a
        deserunt quae.
        <br />
        <br />
        Doloribus fuga, nulla suscipit beatae eum quos possimus obcaecati
        accusantium provident eveniet? Voluptatibus a architecto vero assumenda
        porro nulla voluptatum odio ea sunt labore, ipsam cumque enim amet
        delectus sed. Temporibus optio itaque at adipisci, reprehenderit officia
        sapiente quae laudantium libero enim quas commodi earum ipsum culpa odit
        amet. Hic, eveniet ex. Ex est nostrum, hic sit reprehenderit nobis
        inventore!
      </p>
    </div>
  );
}
