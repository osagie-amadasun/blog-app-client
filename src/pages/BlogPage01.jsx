import React from 'react'
import Navbar from '../components/Navbar'
import Comments from '../components/Comments'
import ai from '../assets/aiImage.png'
import user2ProfilePic from '../assets/user2ProfilePic.png'
import { FaRegHeart } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { IoFilter } from "react-icons/io5";



function BlogPage01() {


    return (
    <div>
      <Navbar />

      <main className="">
        <div className=''>
            <img
                src={ai}
                alt="picture of ai"
                className='w-full h-96 object-cover'
            />
            <h1 className='text-3xl font-bold'>Google Search Ranks AI Spam Above Original Reporting in News Results</h1>
            {/*=======DEATAILS CARD======= */}
            <div className='bg-red-500 flex items-center'>
                <img
                    src={user2ProfilePic}
                    alt="user profile pic"
                    className='w-20 h-20 rounded-full object-cover'
                />
                <div className='bg-slate-500 container ml-5 pl-5 pr-5'>
                    <p><span className='font-medium'>Post by:</span> Efe Amadasun</p>
                    <div className='flex items-center gap-5 p-2'>
                        <h3 className='font-bold cursor-pointer'>@efeamadasun</h3>
                        <FaRegHeart />
                        <BiLike />
                        <BiDislike />
                    </div>
                </div>
            </div>

            <section className='container mt-5'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem impedit expedita aliquam laudantium? Perspiciatis aspernatur quidem dolorem quae qui accusamus commodi recusandae doloremque deleniti sunt? Quod ut a, eos porro amadasun, voluptatum dicta adipisci voluptas obcaecati possimus ipsum perferendis culpa. Est quos iure nisi illum ipsa dolorum architecto quis animi qui enim, sit excepturi molestiae itaque voluptates deleniti vero. Deserunt sunt perferendis nihil debitis, fuga assumenda deleniti consequatur magni fugit excepturi rem voluptatibus exercitationem corporis sapiente veniam distinctio quia dolorum alias? Aliquid, voluptas doloremque. Tempora dolores necessitatibus aut atque perspiciatis id 
                <span>
                    <p>             asperiores, amet, natus dolorum expedita dignissimos cum, cumque temporibus veritatis et blanditiis iusto qui commodi enim quae voluptas aspernatur animi cupiditate reiciendis! Officiis deserunt corporis earum, ducimus iusto porro quasi. Quod id impedit deserunt ipsum eveniet architecto odio necessitatibus. Harum saepe facere, quisquam ipsa eligendi assumenda odio asperiores autem dolorem hic maxime, adipisci deserunt. Est culpa accusamus molestiae libero et doloremque, adipisci reprehenderit obcaecati repellat dolor atque magni omnis corporis error fugit, maxime, facilis impedit dolorem id excepturi quia. Explicabo quibusdam dignissimos tempore saepe cumque at molestias maxime voluptas hic ut suscipit voluptatibus dolore ipsum nobis libero laudantium asperiores, mollitia sapiente assumenda ullam quasi reprehenderit? Dolorum enim quasi consequatur facilis ea temporibus, beatae cum fugiat magni minus, minima doloribus ad animi repellat porro, similique quos laboriosam nisi corporis harum necessitatibus? Eius et quos ut obcaecati magnam maxime itaque voluptatibus, iste officiis suscipit ipsa rem at ex! Ipsam quas veritatis,</p>
                </span>
                 aut laudantium natus velit. Ullam aspernatur voluptas id minus molestias rerum obcaecati accusamus dicta molestiae laborum ad veritatis similique architecto magni, at iure aperiam sequi numquam cupiditate libero praesentium. Aut ratione quo in a esse, ipsa doloremque reprehenderit repellendus consequatur error molestias inventore tempore dolores quia, vel ex voluptate labore blanditiis omnis. Fugiat harum quis, hic mollitia similique perspiciatis officiis beatae.
            </section>

            <section className=''>
                <div className="bg-slate-500">
                    <div className='container flex items-center gap-28 bg-green-400'>
                        <h2 className='text-2xl font-medium'>Comments</h2>
                        <div className='flex items-center justify-start gap-2'>
                            <p className=''>Filter</p>
                            <IoFilter />
                        </div>
                    </div>

                    <div>
                        <div>
                            
                        </div>
                    </div>
                </div>
            </section>
        </div>
      </main>
    </div>
  )
}

export default BlogPage01
