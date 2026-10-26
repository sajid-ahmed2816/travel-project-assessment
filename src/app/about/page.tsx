import Image from "next/image"

function About() {
  return (
    <section className="grid grid-cols-1  md:grid-cols-2 grid-flow-col md:px-8 px-4 md:py-16 py-8 gap-8">
      <div className="">
        <Image
          width={800}
          height={600}
          src={"https://placehold.co/600x400"}
          alt="placeholder image"
          unoptimized
        />
      </div>
      <div className="">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo autem similique debitis harum minus. Itaque modi aliquam facilis, voluptas similique explicabo asperiores, laboriosam numquam blanditiis provident dignissimos, quas minus. Quos.
          Inventore, ducimus doloribus dolorum eaque voluptas minima ad quo reprehenderit eligendi suscipit voluptatibus repellendus ipsum. Deserunt saepe explicabo nulla autem optio, exercitationem molestiae nisi incidunt quibusdam alias minima sapiente reiciendis.
          Dolores nihil nobis recusandae deleniti id beatae. Ipsam distinctio accusantium explicabo tempora, esse, temporibus hic minima doloribus tempore quos fugiat harum molestiae qui cupiditate vitae enim adipisci. Magnam, officia fuga?
          Assumenda incidunt harum eius, ut ab id? Impedit illum laborum minus. Quas eos, asperiores, vitae non, earum quia nemo provident voluptas tenetur dolor nostrum laudantium porro inventore nisi excepturi qui!
          Aperiam, odit voluptate culpa, veritatis exercitationem sequi consequatur, mollitia iusto fugit ipsa pariatur a aut obcaecati? Architecto porro ipsa, quos nulla veniam corporis! Quia reiciendis sit sed accusantium velit impedit.
        </p>
      </div>
    </section>
  )
}

export default About