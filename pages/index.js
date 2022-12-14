import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  if (typeof window != "undefined") {
    window.navigator.geolocation.getCurrentPosition(function (pos) {
      let lat = document.getElementById("lat");
      let lon = document.getElementById("lon");
      let map = document.querySelector("iframe")

      lat.innerHTML = pos.coords.latitude;
      lon.innerHTML = pos.coords.longitude;
      map.src = `https://maps.google.com/maps?width=400&amp;height=400&amp;hl=en&amp;q=@ ${lat}, ${lon}&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed`
    });
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-[100vw] h-[100vh] bg-white text-black flex justify-center items-center">
        <div className="w-[850px] flex h-[300px] rounded-lg border-[1px] p-2.5 border-gray-600">
          <div className="flex flex-col space-y-2">
            <h1 className="text-3xl font-bold">What is GeoLocation?</h1>
            <br />
            <p className="text-gray-500">
              The Geolocation API allows the user to provide their location to{" "}
              <br />
              web applications if they so desire. For privacy reasons, the user{" "}
              <br />
              is asked <br />
            </p>
            <br />
            <br />
            <div className="">
              <div
                className="flex justify-center items-center bg-red-200 w-[150px] h-[40px] text-red-500 text-[2xl] rounded-t-lg border-[1px] border-red-500"
                id="lat"
              ></div>
              <div
                className="flex justify-center items-center bg-red-200 w-[150px] h-[40px] text-red-500 text-[2xl] rounded-b-lg border-[1px] border-red-500"
                id="lon"
              ></div>
            </div>
          </div>
          <div class="mapouter">
            <div class="gmap_canvas">
              <iframe
                class="gmap_iframe"
                frameborder="0"
                className="w-[280px] h-[280px] rounded-lg ml-[100px]"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://maps.google.com/maps?width=400&amp;height=400&amp;hl=en&amp;q=&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
