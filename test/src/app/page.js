import Image from "next/image";
import Header from "./components/header";
import BlogerDiv from "./components/bloger/blogerDiv";
import ScrollImageDiv from "./components/scrollableImages/scrollImageDiv";

const blogersArray12 = [{
    image: 'hi',
    title: 'samsung'
},{
    image: 'hi',
    title: 'samsung'
},{
    image: 'hi',
    title: 'samsung'
},{
    image: 'hi',
    title: 'samsung'
}]

const images = ['image1', 'image2', 'image3']

export default function Home() {
  return (
    <div className="min-h-screen min-w-screen bg-white">
        <Header></Header>
        <main>
            <BlogerDiv blogersArray={blogersArray12}></BlogerDiv>
            <ScrollImageDiv images={images}></ScrollImageDiv>
        </main>
    </div>
  );
}
