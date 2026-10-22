import { BrowserRouter, Routes, Route as Ra, Link as Ca } from "react-router-dom";

// Recovered from the production build. The site is a single-page React app with
// five routes (home, privacy, terms, return, shipping). Image assets are served
// from /assets (see the public/ folder); component and variable names are the
// minified originals from the build, kept as-is so the output matches the live site.

const fy = "/assets/logo-BxctaOte.svg",
  dy = "/assets/inline_32d3bd.png",
  my = "/assets/user1-6VhdAzjL.png",
  hy = "/assets/user2-BYKZSy-M.png",
  xy = "/assets/user3-ADtCoUU4.png",
  gy = "/assets/user4-BF75d-wy.png",
  yy = "/assets/user5-BzsNpgrs.png",
  py = "/assets/user6-D93bj7Nr.png",
  by = "/assets/user7-C5DrfWdl.png",
  vy = "/assets/user8-Dag-WztA.png",
  Ay = "/assets/inline_3c8dc0.png",
  Cxjy = () => (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0C0C0C] to-[#121212] text-white font-onest pb-8">
      <div className="hero-video-bg absolute inset-0 -z-0 pointer-events-none" aria-hidden="true">
        <div className="hero-video-frame">
          <wistia-player
            media-id="5jl4731o8f"
            aspect="1.7777777777777777"
            autoplay
            muted
            silent-autoplay="allow"
            end-video-behavior="loop"
            controls-visible-on-load="false"
            playbar="false"
            big-play-button="false"
            play-pause-control="false"
            volume-control="false"
            fullscreen-control="false"
            settings-control="false"
            playback-rate-control="false"
          ></wistia-player>
        </div>
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="relative z-10">
      <div className="bg-[#D2F801] font-600 text-black text-base font-semibold text-center py-2 border border-black flex items-center justify-center space-x-2">
        <span className="inline-block w-4 h-6 pl-6 lg:pl-0 lg:w-4 lg:h-4 bg-red-600 rounded-full animate-pulse " />
        <span className="">
          Attention: Hurry up before the next rain floods your home and save your home from damage
        </span>
      </div>
      <div className="flex justify-center items-center px-6 py-4 pt-10 pb-10">
        <img src={fy} alt="Storm Water Barrier Logo" className="h-12 md:h-14" />
      </div>
      <div className="text-center max-w-4xl mx-auto px-4 py-2">
        <h1 className="font-onest text-2xl lg:text-6xl md:text-6xl font-bold leading-tight mb-12">
          Flood Damage Costs
          <br />
          {" ₹5–10 Lakhs on Average."}
          <br />
          {" This Barrier Can Save You Every Rupee."}
        </h1>
        <p className="font-onest text-base md:text-xl text-gray-300 mb-10">
          {"Own a home, shop, or office? Get the certified "}
          <span className="text-red-600 font-bold">Storm Water Barrier</span>
          <br />
          from Stone Hands, the fastest, simplest way to block floodwater and
          <br />
          protect everything you’ve built.
        </p>
        <button
          onClick={() =>
            document.getElementById("flood-protection")?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })
          }
          className="bg-[#ED1D20] text-white font-semibold text-[18px] lg:text-[22px] leading-none px-6 lg:px-12 py-6 rounded-full shadow-[0_6px_0_#b91c1c] hover:brightness-110 transition duration-300"
        >
          Get Instant Flood Protection Now!
        </button>
        <p className="font-onest text-gray-400 text-[11px] lg:text-sm mt-4">
          Off-season pricing – protect your property before peak rains.
        </p>
      </div>
      <div className="bg-black mt-10 rounded-full w-full max-w-4xl mx-auto px-4 sm:px-8 lg:px-12 py-10 lg:py-6 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-10">
        <div className="flex flex-col items-center md:items-start">
          <div className="text-2xl font-bold text-white">9,200+</div>
          <img src={dy} alt="Star Rating" className="mt-1" />
        </div>
        <div className="text-center md:text-left">
          <p className="font-onest text-sm text-gray-300 leading-tight">
            properties protected across India & Asia using
            <br />
            Stone Hands Flood Barriers.
          </p>
        </div>
        <div className="flex items-center justify-center overflow-x-auto gap-0 md:gap-[-10px] no-scrollbar">
          {[my, hy, xy, gy, yy, py, by, vy, Ay].map((c, f) => (
            <img
              src={c}
              alt={`user${f + 1}`}
              className="h-10 w-10 rounded-full border-2 border-black -ml-2 first:ml-0"
              style={{
                zIndex: 10 - f,
              }}
              key={f}
            />
          ))}
        </div>
      </div>
      </div>
    </section>
  ),
  Ny ="/assets/product-1-B54bmJxk.png",
  Sy = "/assets/product-2-DyDHVvCW.png",
  wy = "/assets/product-3-ChwuD8bw.png",
  Ey = "/assets/product-4-CgwjeAfk.png",
  Ty = () => (
    <section className="bg-[#f3f3f3] text-[#1d1d1f] font-onest px-4 md:px-10 py-14 md:py-16 leading-relaxed">
      <div className="mb-8 lg:mb-12 max-w-6xl mx-auto text-center px-2">
        <h2 className="text-lg md:text-[45px] font-extrabold leading-snug md:leading-[55px] mb-2">
          Your Property Deserves Better
          <br />
          Than Sandbags.
        </h2>
        <h3 className="text-lg md:text-[45px] font-extrabold leading-snug md:leading-[55px]">
          Protect It with{" "}
          <span className="bg-[#B3D8FE] px-1">
            {"Certified Flood Barriers, "}
            <br className="hidden md:block" />
            Ready when you need them most.
          </span>
        </h3>
      </div>
      <div className="space-y-6 mb-10 text-base md:text-xl max-w-2xl mx-auto">
        <p>
          Every year, sudden rains and clogged drains flood thousands of properties, causing lakhs in damages,
          ruined stock, and lost business. But with the{" "}
          <span className="bg-[#eed9bd] px-1 font-bold">Storm Water Barrier</span>, you’re fully prepared -
          not just hopeful.
        </p>
        <p>
          Certified, lab-tested, and ready to block up to{" "}
          <span className="font-semibold bg-[#B3D8FE] px-1">70cm of water instantly</span>, this isn’t just
          flood control - it’s <span className="font-semibold bg-[#B3D8FE] px-1">instant protection</span>
          {
            " that installs in minutes with no tools or electricity required. While your neighbours scramble, you’ll stay dry, safe, and stress-free."
          }
        </p>
      </div>
      <h4 className="text-base md:text-4xl text-center font-bold mb-8 max-w-3xl mx-auto">
        Why Risk It? Quick-Win Protection Is Here.
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-3xl mx-auto">
        <img src={Ny} alt="Product 1" className="rounded-xl shadow-md w-full" />
        <img src={Sy} alt="Product 2" className="rounded-xl shadow-md w-full" />
        <img src={wy} alt="Product 3" className="rounded-xl shadow-md w-full" />
        <img src={Ey} alt="Product 4" className="rounded-xl shadow-md w-full" />
      </div>
    </section>
  ),
  ui = "/assets/profile-BZXojsm8.png",
  ii = "/assets/inline_262a7d.png",
  Nt = "/assets/inline_32d3bd.png",
  Ry = () => (
    <section className="bg-[#f3f3f3] pt-5 pb-20 px-4 font-onest">
      <div className="max-w-5xl mx-auto bg-[#fff2c9] border border-[#f8d57b] rounded-2xl px-6 py-10 md:px-[130px] md:py-[60px] relative">
        <div className="flex flex-col sm:flex-row sm:items-center mb-4 gap-2">
          <img src={Nt} alt="Stars" className="h-4 w-24 mr-0 sm:mr-0 lg:h-5 lg:w-28" />
          <span className="font-semibold text-black text-lg">Aug 21, 2024</span>
        </div>
        <p className="text-base md:text-xl text-black leading-relaxed mb-6">
          “I’ve seen a lot of flood solutions, but Stone Hands’ barriers are serious protection. We secured
          our warehouse entrance within minutes and stayed dry through two flash floods. Worth every rupee.”
        </p>
        <div className="flex flex-row sm:flex-row items-start sm:items-center gap-4">
          <img src={ui} alt="Amit R" className="h-14 w-14" />
          <div>
            <p className="font-bold text-base md:text-xl text-black">Amit R.,</p>
            <p className="text-gray-600 text-lg">Warehouse Manager, Chennai</p>
          </div>
        </div>
        <img
          src={ii}
          alt="Quote Mark"
          className="absolute bottom-0 right-4 w-28 md:bottom-0 md:right-20 md:w-52"
        />
      </div>
      <div className="flex justify-center mt-12 md:mt-16 px-2">
        <button
          onClick={() =>
            document.getElementById("flood-protection")?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })
          }
          className="w-full sm:w-auto bg-[#F83232] text-white font-semibold py-4 px-8 sm:py-5 sm:px-10 rounded-full shadow-[0_6px_0_#8b0000] sm:shadow-[0_8px_0_#8b0000] text-base sm:text-xl transition-all duration-300 hover:bg-[#d42a2a]"
        >
          Get Your Storm Barrier Now Before Floods Strike
        </button>
      </div>
      <p className="text-center text-xs sm:text-sm text-gray-500 mt-4 sm:mt-6">
        Bulk & Early-Season Orders Accepted. Be Ready Before the Rains Return.
      </p>
    </section>
  ),
  Cy = "/assets/inline_58c9df.png",
  Xl = "/assets/profile-new-CBoZ27PQ.png",
  My = () => (
    <section className="relative bg-[#f32020] text-white font-onest pb-96">
      <div className="max-w-4xl mx-auto px-4 pt-24">
        <h2 className="text-2xl md:text-5xl text-center font-bold leading-tight mb-6 md:mb-10">
          {"The "}
          <span className="text-black underline font-extrabold">3 Critical Facts</span>
          {" Most Property Owners Don’t Know About Flood Protection"}
        </h2>
        <p className="text-white text-sm md:text-xl max-w-2xl mx-auto mb-6 md:mb-10 text-left">
          {
            "After protecting thousands of homes and businesses, we’ve learned that most flood-related losses happen for one simple reason: people wait too long to act. "
          }
          <br />
          Floods don’t give warnings, but most people only prepare after the damage is done.
        </p>
        <hr className="border-t border-black my-6" />
        <div className="space-y-5 md:space-y-6 max-w-3xl mx-auto mt-10 md:mt-14 mb-12">
          <p className="text-white text-center text-lg md:text-4xl font-semibold">
            {"Here’s where most people "}
            <span className="font-bold underline text-black">go wrong:</span>
          </p>
          {[
            "They believe floods won’t happen to them until they do.",
            "They rely on sandbags or temporary fixes, which often fail when water rises fast.",
            "They assume installation is complex or expensive, so they delay until it’s too late.",
          ].map((c, f) => (
            <div className="flex items-start gap-3" key={f}>
              <img src={Cy} alt="wrong" className="w-6 h-6 md:w-6 md:h-6 mt-1" />
              <p className="text-sm md:text-xl">{c}</p>
            </div>
          ))}
          <p className="text-sm md:text-xl font-semibold text-white mt-6">
            These mistakes matter because they’re the reason thousands lose lakhs every year to preventable
            flood damage.
          </p>
        </div>
      </div>
      <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 z-10 w-full max-w-5xl px-4">
        <div className="bg-white rounded-xl shadow-2xl text-black p-6 md:p-16">
          <p className="text-center text-lg text-gray-400 mb-2 uppercase">Ask Yourself</p>
          <h3 className="text-center text-xl md:text-5xl font-bold leading-snug mb-4 md:mb-8">
            {"How much safer would your "}
            <br className="hidden md:block" />
            {"property be if you installed a "}
            <br className="hidden md:block" />
            certified flood barrier today?
          </h3>
          <p className="text-center text-base md:text-xl text-gray-700 mb-6 md:mb-8 max-w-xl mx-auto">
            You’re just one decision away from protecting your entire premises with a solution you can install
            yourself in minutes.
          </p>
          <div className="flex justify-center">
            <button
              onClick={() =>
                document.getElementById("flood-protection")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
              className="bg-[#F83232] text-white font-semibold py-4 px-6 md:py-5 md:px-10 rounded-full shadow-[0_6px_0_#8b0000] text-lg md:text-xl transition-all duration-300 hover:bg-[#d42a2a] font-onest"
            >
              Get Protected Before The Rains Return
            </button>
          </div>
          <p className="text-center text-sm md:text-[14px] text-gray-500 mt-6">
            Bulk & Early-Season Orders Accepted. Be Ready Before the Rains Return.
          </p>
          <div className="px-4 md:px-6 py-6 rounded-xl mt-6 md:mt-8">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-6 text-left">
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <p className="text-xl md:text-2xl font-extrabold text-black mb-1">9,200+</p>
                <div className="flex gap-1 justify-center">
                  <img src={Nt} alt="star" className="h-5" />
                </div>
              </div>
              <div className="text-sm md:text-[15px] text-gray-700 leading-snug text-center md:text-left max-w-md">
                Certified by CNAS, MA, and ILAC-MRA standards for UV resistance, tensile strength, and water
                blocking.
              </div>
              <div className="flex justify-center md:justify-end items-center w-full md:w-auto">
                <img src={Xl} alt="profile" className="h-8 md:h-10 object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  ),
  Oy = "/assets/fire-icon-CKObp6ZU.png",
  Cxzy = () => (
    <div className="bg-[#f3f3f3] px-4 mt-[110%] lg:mt-[28%] pb-10 space-y-10 ">
      <div className="max-w-5xl mx-auto bg-[#fff2c9] border border-[#f8d57b] rounded-2xl px-4 sm:px-[30px] md:px-[130px] py-[60px]  relative mb-28">
        <div className="flex items-center mb-4">
          <img src={Nt} alt="Stars" className="h-5 mr-3" />
          <span className="font-semibold text-black text-lg font-onest">Sep 05, 2024</span>
        </div>
        <p className="text-base sm:text-xl text-black leading-relaxed mb-6 font-onest">
          “I’ve seen a lot of flood solutions, but Stone Hands’ barriers are serious protection. We secured
          our warehouse entrance within minutes and stayed dry through two flash floods. Worth every rupee.”
        </p>
        <div className="flex items-center">
          <img src={ui} alt="Amit R" className="h-14 w-14 mr-4" />
          <div>
            <p className="font-bold text-base sm:text-xl text-black font-onest">Amit R.,</p>
            <p className="text-gray-600 text-lg font-onest">Warehouse Manager, Chennai</p>
          </div>
        </div>
        <img
          src={ii}
          alt="Quote Mark"
          className="absolute bottom-0 right-4 sm:right-20 w-16 sm:w-24 md:w-52"
        />
      </div>
      <div className="relative max-w-5xl mx-auto bg-[#F52E2E] text-white rounded-xl px-4 sm:px-6 py-10 text-center">
        <img
          src={Oy}
          alt="Fire Icon"
          className="w-24 h-24 sm:w-[125px] sm:h-[125px] absolute -top-14 left-1/2 -translate-x-1/2"
        />
        <h2 className="text-xl sm:text-2xl md:text-5xl font-bold leading-snug mt-14">
          {"Worried about how fast "}
          <br />
          {"floodwater can ruin everything "}
          <br />
          you’ve built?
        </h2>
        <div className="mt-4 text-base sm:text-xl text-left text-white space-y-2 px-4 sm:px-[30px] md:px-[130px] py-6 sm:py-[40px]">
          <p className="pb-5">
            {"Here’s the scary truth: "}
            <br />
            <span className="text-white font-semibold">
              {"Most property owners don’t take flood protection seriously "}
              <br />
              <span className="bg-[#EED9BD] text-black px-1">
                until they’ve already suffered thousands in damage.
              </span>
            </span>
          </p>
          <p className="font-bold text-base sm:text-xl text-white pb-5">
            {"A sudden downpour combined with poor drainage can "}
            <br />
            lead to disaster in under an hour.
          </p>
          <p className="text-base sm:text-xl">
            {"We’ve seen homes, shops, and offices completely ruined just because "}
            <br />
            {"they didn’t have a barrier ready when it mattered most. "}
            <br />
            And the worst part?{" "}
            <span className="bg-[#EED9BD] text-black px-1 font-semibold">It’s completely preventable.</span>
          </p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto pt-4 lg:pt-12 px-4">
        <h3 className="text-lg text-center sm:text-2xl md:text-6xl font-bold">
          But what if I told you the real problem isn’t the flood… Is it a lack of planning?
        </h3>
        <div className="max-w-3xl mx-auto">
          <p className="py-6 text-left text-gray-800 text-base sm:text-xl">
            The flood isn’t your enemy; unpreparedness is.
          </p>
          <p className="text-gray-800 text-left text-base sm:text-xl pb-8">
            Your safety doesn’t have to depend on the weather forecast.
          </p>
          <p className="text-base sm:text-xl text-left bg-[#eed9bd] font-100 px-1 py-1 font-semibold inline">
            The Storm Water Barrier provides instant protection, with no tools, no panic, and no problem.
          </p>
          <p className="mt-8 text-base sm:text-xl text-left text-gray-800">
            {"Block up to 70cm of water in minutes and get back the one thing floods always steal: "}
            <span className="text-left bg-[#eed9bd] font-100 px-1 py-0 font-semibold inline">
              peace of mind.
            </span>
          </p>
          <div className="flex justify-center mt-8">
            <button
              onClick={() =>
                document.getElementById("flood-protection")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
              className="bg-[#F83232] text-white font-semibold py-4 sm:py-5 px-10 sm:px-14 rounded-full shadow-[0_8px_0_#8b0000] text-base sm:text-xl transition-all duration-300 hover:bg-[#d42a2a] font-onest"
            >
              Secure My Property Today
            </button>
          </div>
          <p className="mt-4 text-center text-sm sm:text-base text-gray-400">
            Install once. Stay dry for years.
          </p>
        </div>
      </div>
    </div>
  ),
  By = "/assets/bulb-C8SiikR0.png",
  Dy = () => (
    <div className="bg-gray-100 px-4 py-8 lg:py-16">
      <div className="max-w-5xl mx-auto bg-[#FFF6DB] text-black rounded-xl p-6 sm:p-10 lg:p-20 text-center relative">
        <img
          src={By}
          alt="Bulb Icon"
          className="w-20 h-20 sm:w-[125px] sm:h-[125px] absolute -top-10 sm:-top-14 left-1/2 -translate-x-1/2"
        />
        <h2 className="text-xl sm:text-3xl lg:text-5xl font-bold leading-snug mt-6">
          {"This is where the "}
          <br />
          <span className="text-[#F52E2E]">Storm Water Barrier</span> <br />
          comes to the rescue
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className="mt-6 text-base sm:text-xl text-gray-800 text-left">
            {
              "Every year, thousands of properties suffer simply because they weren’t protected in time, not because the solution didn’t exist. "
            }
            <br />
            {"Floods are unpredictable, but protecting against them doesn’t have to be. With the "}
            <strong className="bg-[#fff] text-black px-1">Stone Hands Storm Water Barrier</strong>, you get
            instant, certified protection against water damage, no tools, no power, no panic.
          </p>
          <div className="text-left mt-6 text-base sm:text-xl font-semibold">
            <p className="text-lg sm:text-xl pb-4">
              Once installed, this barrier keeps your premises safe from:
            </p>
            <ul className="list-disc text-lg sm:text-xl list-inside space-y-1">
              <li>Sudden monsoon floods</li>
              <li>Drainage overflows</li>
              <li>Water entering through basements, garages, shops, or apartment lobbies</li>
              <li>And even curve paths or irregular terrain, thanks to its modular, lockable design</li>
            </ul>
          </div>
          <p className="mt-6 text-base sm:text-xl text-gray-800 text-left">
            With a high-strength ABS body and water-sealing foam, you’ll see a sharp reduction in risk,
            coupled with a significant increase in readiness, the kind that saves lakhs in potential damage.
          </p>
        </div>
        <button
          onClick={() =>
            document.getElementById("flood-protection")?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })
          }
          className="bg-[#F83232] text-white font-semibold py-4 sm:py-5 px-10 sm:px-14 rounded-full shadow-[0_6px_0_#8b0000] text-base sm:text-xl transition-all duration-300 hover:bg-[#d42a2a] font-onest mt-6 mb-6"
        >
          Get My Storm Barrier Now
        </button>
        <p className="mt-4 mb-6 text-sm sm:text-base text-gray-600">
          Bulk & Early-Season Orders Accepted. Be Ready Before the Rains Return.
        </p>
        <div className="px-2 sm:px-6 py-6 rounded-xl">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4 sm:gap-6">
            <div className="flex flex-col items-center sm:items-start">
              <p className="text-black font-bold text-2xl sm:text-3xl mb-1">9,200+</p>
              <img src={Nt} alt="Rating Stars" className="w-20 sm:w-24" />
            </div>
            <div className="text-center sm:text-left text-sm sm:text-[15px] text-gray-800 leading-tight max-w-md">
              <p>
                {"9,200+ properties protected across India. "}
                <br className="hidden sm:block" />
                Monsoon’s coming, be ready before it does.
              </p>
            </div>
            <img src={Xl} alt="User Profiles" className="h-10 object-contain" />
          </div>
        </div>
      </div>
    </div>
  ),
  Uy = "/assets/sh1-DDt7Y8gA.png",
  Hy = "/assets/sh2-CfvwxIOf.png",
  Yy = "/assets/sh3-BGyVRfzj.png",
  Ly = "/assets/sh4-DqI91B28.png",
  Cxqy = () => (
    <section className="bg-[#f3f3f3]">
      <div className="mt-0 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto px-4 pt-10">
        <img src={Uy} alt="Product 1" className="w-full rounded-lg object-cover" />
        <img src={Hy} alt="Product 2" className="w-full rounded-lg object-cover" />
        <img src={Yy} alt="Product 3" className="w-full rounded-lg object-cover" />
        <img src={Ly} alt="Product 4" className="w-full rounded-lg object-cover" />
      </div>
      <div className="text-black py-12 px-4 sm:px-6 text-left sm:text-center">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-snug mb-6">
          {"Find the easiest way to flood-proof "}
          <br className="hidden md:block" />
          {" your property"}
        </h1>
        <p className="text-base sm:text-xl md:text-[18px] text-gray-900 sm:text-center sm:max-w-xl sm:mx-auto leading-relaxed mb-4">
          {
            "Now, let’s be honest… If you wait until the water is at your doorstep, no barrier in the world can help fast enough. "
          }
          <br />
          {"That’s why we built the "}
          <span className="bg-[#f3e6cf] font-bold">Storm Water Barrier</span> <br />
          to be the <span className="bg-[#f3e6cf] font-bold">simplest, clearest flood protection system</span>
          {" available — no tools, no confusion, no last-minute scrambling."}
        </p>
        <p className="text-base sm:text-xl md:text-xl sm:text-center sm:max-w-xl sm:mx-auto font-extrabold mt-6 mb-10">
          {"Instead, we’ve made it our mission to keep you safe with "}
          <br className="hidden md:block" />
          zero guesswork — just place, lock, and relax.
        </p>
        <div className="mb-6 text-center">
          <button
            onClick={() =>
              document.getElementById("flood-protection")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }
            className="bg-[#F83232] text-white font-semibold py-4 px-10 sm:py-5 sm:px-10 rounded-full shadow-[0_8px_0_#8b0000] text-base sm:text-xl transition-all duration-300 hover:bg-[#d42a2a] font-onest"
          >
            I Want Instant Flood Protection
          </button>
        </div>
        <p className="text-sm text-gray-400 text-center">
          Most people wait until it’s too late. You won’t have to.
        </p>
      </div>
    </section>
  ),
  Yn = "/assets/inline_a1780b.png",
  Gy = () => (
    <>
      <section className="bg-[#fff] px-6 py-16 rounded-2xl max-w-5xl mx-auto text-center text-black shadow-sm">
        <p className="text-[16px] text-gray-500 font-semibold mb-3 uppercase tracking-wide">
          Here’s Our Promise
        </p>
        <h2 className="text-[26px] md:text-5xl font-extrabold leading-snug mb-8">
          {"The Storm Water Barrier will "}
          <br className="hidden md:block" />
          {"give you simple, powerful "}
          <br className="hidden md:block" />
          protection that will:
        </h2>
        <div className="space-y-4 text-left max-w-2xl mx-auto mb-8">
          {[
            "Block floodwater up to 70cm high",
            "Deploy in minutes without tools or power",
            "Prevent lakhs in potential damage, downtime & loss",
          ].map((c, f) => (
            <div className="flex items-start gap-3" key={f}>
              <img src={Yn} alt="Tick" className="h-5 mt-1" />
              <p class="text-base sm:text-xl text-left bg-[#eed9bd] font-100 px-1 py-1 font-semibold inline">
                {c}
              </p>
            </div>
          ))}
        </div>
        <div className="text-base lg:text-xl text-left text-gray-800 leading-relaxed max-w-2xl mx-auto mb-6">
          <p className="mb-4">
            With the Stone Hands Storm Water Barrier, you're equipped with the most efficient, lab-tested
            flood protection system for homes, shops, offices, schools, and warehouses.
          </p>
          <p>
            We’ve eliminated all the guesswork, no complicated installation, no heavy machinery. Just connect,
            lock, and stay protected. You’ll be able to shield your property before water ever becomes a
            threat and reuse the same barrier for years to come.
          </p>
        </div>
        <div className="mb-5">
          <button
            onClick={() =>
              document.getElementById("flood-protection")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }
            className="bg-[#F83232] text-white font-semibold py-5 px-10 rounded-full shadow-[0_8px_0_#8b0000] text-xl transition-all duration-300 hover:bg-[#d42a2a] font-onest"
          >
            Get My Flood Protection Barrier Now
          </button>
        </div>
        <p className="text-base lg:text-[12px] text-gray-400 mb-8">
          Bulk & Early-Season Orders Accepted. Be Ready Before the Rains Return.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-left px-4">
          <div className="flex flex-col items-center md:items-start">
            <p className="text-2xl font-extrabold">9,200+</p>
            <div className="flex mt-1">
              <img src={Nt} alt="star" className="h-5 mr-1" />
            </div>
          </div>
          <p className="text-[15px] text-gray-600 max-w-xs text-center md:text-left">
            9,200+ properties protected across India, trusted by families, shopkeepers & institutions alike.
          </p>
          <div className="flex justify-center md:justify-end w-full md:w-auto">
            <img src={Xl} alt="Profiles" className="h-10 object-contain" />
          </div>
        </div>
      </section>
      <div className="max-w-5xl mx-auto bg-[#fff2c9] border border-[#f8d57b] rounded-2xl px-6 py-10 md:px-[130px] md:py-[60px] relative mt-16">
        <div className="flex flex-col sm:flex-row sm:items-center mb-4 gap-2">
          <img src={Nt} alt="Stars" className="h-4 w-24 mr-0 sm:mr-0 lg:h-5 lg:w-28" />
          <span className="font-semibold text-black text-lg">Sep 05, 2024</span>
        </div>
        <p className="text-base md:text-xl text-black leading-relaxed mb-6">
          “I’ve seen a lot of flood solutions, but Stone Hands’ barriers are serious protection. We secured
          our warehouse entrance within minutes and stayed dry through two flash floods. Worth every rupee.”
        </p>
        <div className="flex flex-row sm:flex-row items-start sm:items-center gap-4">
          <img src={ui} alt="Amit R" className="h-14 w-14" />
          <div>
            <p className="font-bold text-base md:text-xl text-black">Amit R.,</p>
            <p className="text-gray-600 text-lg">Warehouse Manager, Chennai</p>
          </div>
        </div>
        <img
          src={ii}
          alt="Quote Mark"
          className="absolute bottom-0 right-4 w-28 md:bottom-0 md:right-20 md:w-52"
        />
      </div>
    </>
  ),
  _y = "/assets/trust1-BwR4ktZ2.png",
  Xy = "/assets/trust2-CT2umxRN.png",
  Qy = "/assets/trust3-DXiTKnMK.png",
  Vy = () => (
    <section className="bg-[#f3f3f3] py-16 px-1 md:py-24 md:px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-black mb-12">
          {"Lab-Tested. Field-Proven. "}
          <br />
          {" Trusted Nationwide."}
        </h2>
        <div className="overflow-x-auto rounded-2xl bg-white trustadow border border-gray-200">
          <table className="w-full text-sm border border-gray-300 text-left">
            <thead>
              <tr className="bg-white-100">
                <th className="p-4 font-semibold text-xl text-center border border-gray-300" colSpan="2">
                  Product Dimensions
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ["NAME", "WZ75 STORM WATER BARRIER"],
                ["SIZE", "85CM*100CM*75CM, ±5%"],
                ["THICKNESS", "5MM±5%"],
                ["TEXTURE OF MATERIAL", "REDABS, SURFACE UV RESISTANT COATING"],
                ["WEIGHT", "9.6KG±2%/PCS"],
                ["USEFUL HEIGHT", "75CM"],
                ["MOLECULAR COMPOSITION", "ABS"],
                ["DENSITY (G/CM³)", "1.041"],
                ["TENSILE STRENGTH", "≥70MPA"],
                ["BENDING STRENGTH", "≥45MPA"],
                ["TEMPERATURE RESISTANCE", "-10~+80°C"],
                ["40HQ", "BULK ABOUT 1300PCS"],
              ].map(([c, f], d) => (
                <tr className="border-t border-gray-300" key={d}>
                  <td className="py-5 px-4 lg:py-5 lg:px-8 text-[13px] lg:text-sm font-medium text-gray-700 border border-gray-300 w-1/3">
                    {c}
                  </td>
                  <td className="py-5 px-4 lg:py-5 lg:px-8  text-[13px] lg:text-sm text-gray-900 border border-gray-300">
                    {f}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-10 text-center max-w-fit mx-auto">
          {["Modular", "Stackable", "Lockable", "Curve-Friendly (±3° adjustment)"].map((c, f) => (
            <div className="flex items-start gap-2 mb-3 justify-start" key={f}>
              <img src={Yn} alt="check" className="w-5 h-5 mt-1" />
              <span className="bg-[#efddbe] px-1.5 py-0.5 font-semibold text-gray-900 rounded">{c}</span>
            </div>
          ))}
        </div>
        <div className="mt-12 grid grid-cols-2 gap-5 max-w-3xl mx-auto">
          <img src={_y} alt="Product 1" className="w-full rounded-lg object-cover" />
          <img src={Xy} alt="Product 2" className="w-full rounded-lg object-cover" />
        </div>
        <div className="mt-5 grid grid-cols-1 gap-4 max-w-3xl mx-auto">
          <img src={Qy} alt="Product 1" className="w-full rounded-lg object-cover" />
        </div>
        <div className="mt-10">
          <button
            onClick={() =>
              document.getElementById("flood-protection")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }
            className="bg-[#F83232] text-white font-semibold py-5 px-10 rounded-full shadow-[0_8px_0_#8b0000] text-base lg:text-xl transition-all duration-300 hover:bg-[#d42a2a] font-onest"
          >
            Get My Flood Barrier Now – Be Monsoon-Ready in Minutes
          </button>
        </div>
        <p className="mt-8 text-sm lg:text-base text-gray-400">
          Certified by CNAS, MA & ILAC-MRA | Used by 9,200+ properties across India
        </p>
      </div>
    </section>
  ),
  Zy = "/assets/man-YPEbpy-9.png",
  Ky = () => (
    <div className="bg-white px-4 py-16">
      <div className="max-w-5xl mx-auto flex flex-col md:grid md:grid-cols-1 items-center gap-0">
        <div className="flex justify-center mb-10 md:mb-0">
          <img src={Zy} alt="Trusted Expert" className="w-48 sm:w-64 md:w-80 object-contain" />
        </div>
        <div className="text-black w-full">
          <div className="text-center mb-6">
            <h2 className="inline bg-[#B3D8FE] text-black text-2xl sm:text-4xl md:text-5xl font-extrabold px-1 py-2 leading-snug">
              Why should you trust us?
            </h2>
          </div>
          <div className="space-y-4 text-gray-800 text-left text-lg sm:text-xl max-w-3xl mx-auto">
            <p>
              {"At "}
              <strong>Stone Hands</strong>, we’ve spent years solving one specific problem: how to protect
              people and property from sudden urban flooding quickly, affordably, and without professional
              help.
            </p>
            <p>
              We’ve worked with{" "}
              <span className="bg-yellow-100 font-semibold">
                homeowners, shopkeepers, hospitals, city planners, and municipal authorities
              </span>{" "}
              across India to install flood barriers that are field-tested and lab-certified to perform under
              real-world pressure.
            </p>
            <p>
              Our barrier technology is based on clever mechanical design, not electricity or overengineered
              systems, and it’s built with{" "}
              <span className="bg-yellow-100 font-semibold">UV-resistant, high-tensile ABS</span> tested to
              global standards.
            </p>
            <p>We don’t just sell a product. We help people stay calm, dry, and safe when nature strikes.</p>
            <p>
              Bottom line: We’ve protected 9,200+ properties (and counting), and we’re here to help protect
              yours next.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 text-left mt-10">
            <div className="flex flex-col items-center sm:items-start">
              <p className="text-black font-bold text-2xl sm:text-3xl">9,200+</p>
              <img src={Nt} alt="Stars" className="w-20 mt-1" />
            </div>
            <p className="text-[15px] sm:text-[16px] text-gray-600 max-w-xs text-center sm:text-left mx-auto sm:mx-0">
              We’ve protected 9,200+ properties (and counting), and we’re here to help protect yours next.
            </p>
            <div className="flex justify-center sm:justify-end w-full sm:w-auto">
              <img src={Xl} alt="Profiles" className="h-10 object-contain" />
            </div>
          </div>
          <div className="mt-8 text-center">
            <button
              onClick={() =>
                document.getElementById("flood-protection")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
              className="bg-[#F83232] w-full sm:w-auto text-white font-semibold py-4 px-8 rounded-full shadow-[0_8px_0_#8b0000] text-base sm:text-xl transition-all duration-300 hover:bg-[#d42a2a] font-onest"
            >
              Order My Barrier Set Now
            </button>
            <p className="mt-4 text-sm sm:text-[14px] text-gray-500">
              Last batch sold out in 3 days. Yours is one click away.
            </p>
          </div>
        </div>
      </div>
    </div>
  ),
  ky = [
    "Order your Storm Water Barrier today.",
    "Install it yourself in minutes (no tools or power required).",
    "Connect and extend as needed around doors, gates, or walkways.",
    "Sleep better knowing your property is protected even during peak monsoon.",
  ],
  Wy = () => (
    <section className="bg-[#f3f3f3] px-4 py-20">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-black leading-snug mb-12">
          “Alright, I’m sold. How does this work?”
        </h2>
        <ul className="space-y-6 text-left">
          {ky.map((c, f) => (
            <li className="flex items-start gap-4" key={f}>
              <div className="flex-shrink-0">
                <div className="w-7 h-7 flex items-center justify-center rounded-full bg-white  text-black font-extrabold shadow-md">
                  {f + 1}
                </div>
              </div>
              <p className="text-xl text-black font-extrabold">{c}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  ),
  Jy = "/assets/inline_4eea00.png",
  Iy = [
    {
      title: "Basic Pack",
      subtitle: "Perfect for homes & small shops",
      features: [
        "Covers 3 meters",
        "Quick DIY Setup (No Tools Needed)",
        "Blocks up to 70cm of water",
        "Reusable | Weatherproof | UV Resistant",
        {
          text: "No Corner Adjustment Kit",
          negative: !0,
        },
      ],
      label: "Set of 3 Barriers",
      button: "I WANT THIS! ₹999 + GST",
      link: "https://rzp.io/rzp/pack-of-3",
      color: "gray",
    },
    {
      title: "Standard Pack",
      subtitle: "For gates, basements & wide entrances",
      features: [
        "All Basic Pack Features",
        "Covers 5 meters",
        "Includes curve-fit buckle set",
        "Installation Video Guide",
        "Emergency Preparedness Checklist FREE",
      ],
      label: "Set of 5 Barriers",
      button: "I WANT THIS! ₹2,499 + GST",
      link: "https://rzp.io/rzp/pack-of-05",
      color: "green",
    },
    {
      title: "Advanced Pack",
      subtitle: "Perfect for apartments, clinics, offices",
      features: [
        "All Standard Pack Features",
        "Covers 8 meters",
        "Priority Dispatch & Tracking",
        "WhatsApp Setup Support",
        "Includes storage clips for stacking",
      ],
      label: "Set of 7 Barriers",
      button: "I WANT THIS! ₹4,999 + GST",
      link: "https://rzp.io/rzp/pack-of-7",
      color: "red",
    },
  ],
  Fy = () => (
    <section id="flood-protection" className="bg-black text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl text-center font-extrabold text-red-600 mb-2">
          Choose Your Barrier Pack
        </h2>
        <p className="text-white text-center font-medium mb-12">
          PROTECT WHAT MATTERS BEFORE THE FLOODWATERS ARRIVE.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-black">
          {Iy.map((c, f) => (
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between relative" key={f}>
              <div
                className={`absolute top-0 left-0 px-8 py-4 rounded-lg text-[14px] font-semibold z-10 ${c.color === "green" ? "bg-green-100 text-green-600" : c.color === "red" ? "bg-red-100 text-red-600" : "bg-gray-200 text-gray-700"}`}
              >
                {c.label}
              </div>
              <div className="mt-14">
                <h3 className="text-2xl font-bold mb-1">{c.title}</h3>
                <p className="text-sm text-gray-700 mb-4">{c.subtitle}</p>
                <ul className="space-y-2 text-sm text-gray-800">
                  {c.features.map((d, o) => {
                    const h = typeof d == "object" && d.negative,
                      b = typeof d == "object" ? d.text : d;
                    return (
                      <li className="flex items-start gap-2" key={o}>
                        <img src={h ? Jy : Yn} alt={h ? "✘" : "✔"} className="h-4 mt-1" />
                        <span className={h ? "text-red-600 line-through" : ""}>{b}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="mt-6">
                <a
                  href={c.link}
                  className={`block text-center w-full py-3 text-white font-bold rounded-full text-sm ${c.color === "green" ? "bg-green-600 hover:bg-green-700" : c.color === "red" ? "bg-red-600 hover:bg-red-700" : "bg-gray-800 hover:bg-gray-900"}`}
                >
                  {c.button}
                </a>
                <p className="text-[10px] text-center text-gray-500 mt-4">
                  You will be redirected to a secure checkout where you can pay with:
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="px-6 py-6 rounded-xl">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6 mt-10">
            <div className="flex flex-col items-center sm:items-start">
              <p className="text-white font-bold text-3xl mb-1">9,200+</p>
              <img src={Nt} alt="Rating Stars" className="w-24" />
            </div>
            <div className="text-center sm:text-left text-[15px] text-gray-300 leading-tight max-w-md">
              <p>
                {"We’ve protected 9,200+ properties (and counting), "}
                <br className="hidden sm:block" />
                and we’re here to help protect yours next.
              </p>
            </div>
            <div className="flex justify-center sm:justify-end w-full sm:w-auto">
              <img src={Xl} alt="User Profiles" className="h-10 object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  ),
  Py = "/assets/badge-To1GvfuU.png",
  $y = "/assets/inline_f99401.png",
  Cxep = () => (
    <section className="relative bg-[#FFF3D6] py-12 px-6">
      <img src={$y} alt="Triangle" className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-10" />
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-6">
        <div className="flex-shrink-0">
          <img src={Py} alt="Money Back Badge" className="w-32 md:w-36" />
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-4xl font-extrabold text-black mb-2">
            14-Day Peace-of-Mind Guarantee
          </h2>
          <p className="text-xl text-gray-800 leading-relaxed">
            {"We’re confident the "}
            <strong>Storm Water Barrier</strong>
            {" will keep your property safe that’s why we offer a "}
            <strong>no-questions-asked, 14-day satisfaction guarantee</strong>.<br />
            <br />
            {
              "If you don’t feel fully protected after testing the barrier or if it doesn’t meet your expectations just let us know within 14 days and we’ll "
            }
            <strong className="bg-[#B3D8FE] font-semibold px-1">refund 100% of your money.</strong>
            {"Because your "}
            <strong>safety, trust, and peace of mind</strong>
            {" are what matter most."}
          </p>
        </div>
      </div>
    </section>
  ),
  tp = "/assets/pro-1-0HfeoP8x.png",
  lp = "/assets/pro-2-B1zFxm9h.png",
  ap = "/assets/pro-3-CxJMSptG.png",
  np = "/assets/pro-4-DX-6KipM.png",
  up = "/assets/pro-5-BTN3dDzZ.png",
  ip = "/assets/pro-6-CN07cgiF.png",
  sp = "/assets/pro-7-CuP-3Vgx.png",
  cp = "/assets/pro-8-DM3vUiQG.png",
  rp = "/assets/pro-9-BM0UWg-n.png",
  op = "/assets/pro-10-DBdFUOmi.png",
  fp = "/assets/pro-11-BYt20AFA.png",
  dp = "/assets/pro-12-DGbaFxAf.png",
  mp = "/assets/pro-13-cdknTlaa.png",
  hp = "/assets/pro-14-CQJWRDvL.png",
  xp = "/assets/pro-15-CiSupsay.png",
  gp = "/assets/pro-16-Dsph_gjp.png",
  yp = [
    {
      name: "Neha S.",
      date: "Jul 3, 2024",
      text: "We live in an apartment complex in Chennai that’s prone to waterlogging every monsoon. I saw your ad and thought “What if it actually works?” So I convinced our association to try a few pieces. We are now buying a full set for our entire block. We were amazed at how fast it goes up!",
      title: "Resident Welfare Association, Chennai",
    },
    {
      name: "Manoj M.",
      date: "Jun 12, 2024",
      text: "I’ve tried everything — sandbags, wooden planks, you name it. Nothing ever fit right and always made a mess. But this barrier system? Game changer. We secured our entire storefront in minutes. Clean, strong, and fast. Customers noticed it too.",
      title: "Retail Shop Owner, Surat",
    },
    {
      name: "Dr. Latha K.",
      date: "Jul 9, 2024",
      text: "We purchased the barriers to protect the emergency entrance at our clinic. It used to flood every time water levels rose in the area. This year, the barriers held perfectly. No leaks, no panic. Even our night staff could set it up without issue.",
      title: "Hospital Admin, Coimbatore",
    },
    {
      name: "Arvind B.",
      date: "May 28, 2024",
      text: "Our warehouse got flooded twice in 2023. We needed something that didn't require a team of workers or special gear to deploy. These barriers lock into place with no tools, and they really do work. Great design.",
      title: "Logistics Manager, Pune",
    },
    {
      name: "Revathi M.",
      date: "Jul 17, 2024",
      text: "We use it around our garden walkway where water usually creeps into the house. Initially, I was skeptical, but it’s so simple to use. Even my kids helped! We even guided our neighbors to get one for their side gate.",
      title: "Homeowner, Kochi",
    },
  ],
  pp = [tp, lp, ap, np, up, ip],
  bp = [sp, cp],
  vp = [rp, op, fp, dp, mp, hp, xp, gp],
  Ap = () => (
    <div className="bg-gray-100 text-center px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl sm:text-5xl font-bold text-black leading-snug pb-12">
        {"Why over 9,200+ property owners "}
        <br />
        {"just "}
        <span role="img" aria-label="love" className="inline-block">
          ❤️
        </span>
        {" the Storm Water Barrier"}
      </h2>
      {yp.map((c, f) => (
        <div
          className="max-w-5xl mx-auto bg-[#fff2c9] border border-[#f8d57b] rounded-2xl px-6 sm:px-12 lg:px-[130px] py-8 sm:py-12 relative text-left mb-6"
          key={f}
        >
          <div className="flex items-center mb-4">
            <img src={Nt} alt="Stars" className="h-5 mr-3" />
            <span className="font-semibold text-black text-lg font-onest">
              {c.name}
              {" · "}
              {c.date}
            </span>
          </div>
          <p className="text-base sm:text-xl text-black leading-relaxed mb-6 font-onest">{c.text}</p>
          <div className="flex items-center">
            <img src={ui} alt={c.name} className="h-12 w-12 sm:h-14 sm:w-14 mr-4 object-cover" />
            <div>
              <p className="font-bold text-black text-base sm:text-lg font-onest">{c.name}</p>
              <p className="text-gray-600 text-lg font-onest">{c.title}</p>
            </div>
          </div>
          <img
            src={ii}
            alt="Quote Mark"
            className="absolute bottom-0 right-4 sm:right-20 w-16 sm:w-24 md:w-52 opacity-80"
          />
        </div>
      ))}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 max-w-5xl mx-auto px-2 sm:px-4">
        {pp.map((c, f) => (
          <img src={c} alt={`Testimonial ${f + 1}`} className="w-auto h-auto rounded-xl shadow-md" key={f} />
        ))}
      </div>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 max-w-4xl mx-auto px-2 sm:px-4">
        {bp.map((c, f) => (
          <img src={c} alt={`Testimonial ${f + 1}`} className="w-auto h-auto rounded-xl shadow-md" key={f} />
        ))}
      </div>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 gap-4 max-w-6xl mx-auto px-2 sm:px-4">
        {vp.map((c, f) => (
          <img src={c} alt={`Testimonial ${f + 1}`} className="w-auto h-auto rounded-xl shadow-md" key={f} />
        ))}
      </div>
    </div>
  ),
  Cxjp = () => (
    <section className="bg-white px-6 py-16 rounded-2xl max-w-5xl mx-auto text-center text-black shadow-sm">
      <p className="text-sm text-gray-500 font-semibold mb-3 uppercase tracking-wide">Here’s Our Promise</p>
      <h2 className="text-[26px] md:text-5xl font-extrabold leading-snug mb-8">
        {"The Storm Water Barrier "}
        <br className="hidden md:block" />
        {"gives you simple, effective "}
        <br className="hidden md:block" />
        protection that will:
      </h2>
      <div className="space-y-5 text-left max-w-3xl mx-auto mb-10">
        {[
          "Stop floodwater before it enters your property",
          "Install in minutes without any tools or hassle",
          "Protect homes, shops, offices & more from costly damage",
        ].map((c, f) => (
          <div className="flex items-start gap-3" key={f}>
            <img src={Yn} alt="Checked" className="h-5 mt-1" />
            <p className="text-base sm:text-xl text-left bg-[#eed9bd] font-100 px-1 py-1 font-semibold inline">
              {c}
            </p>
          </div>
        ))}
      </div>
      <div className="mb-6">
        <button
          onClick={() =>
            document.getElementById("flood-protection")?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })
          }
          className="bg-[#F83232] text-white font-semibold py-5 px-10 rounded-full shadow-[0_8px_0_#8b0000] text-sm lg:text-xl transition-all duration-300 hover:bg-[#d42a2a] font-onest"
          aria-label="Choose your barrier set and place your order now"
        >
          Choose your barrier set and place your order now
        </button>
      </div>
      <p className="text-xs text-gray-400 mb-10">
        It’s the easiest way to stay safe before the next rain hits.
      </p>
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-left px-2 sm:px-4">
        <div className="flex flex-col items-center md:items-start">
          <p className="text-2xl font-extrabold">9,200+</p>
          <div className="flex mt-1">
            <img src={Nt} alt="Star rating" className="h-5 mr-1" />
          </div>
        </div>
        <p className="text-sm sm:text-[15px] text-gray-600 max-w-sm text-center md:text-left">
          Already trusted by 9,200+ families, shopkeepers & institutions. Don't wait for the flood. Get
          protected today.
        </p>
        <div className="flex justify-center md:justify-end w-full md:w-auto">
          <img src={Xl} alt="Happy customers" className="h-10 object-contain" />
        </div>
      </div>
    </section>
  ),
  Np = () => (
    <>
      <section className="bg-[#fff] px-6 py-16 rounded-2xl max-w-5xl mx-auto text-center text-black shadow-sm">
        <p className="text-[16px] text-gray-500 font-semibold mb-3 uppercase tracking-wide">AS I SAID</p>
        <h2 className="text-[26px] md:text-5xl font-extrabold leading-snug mb-8">
          {"The Storm Water Barrier "}
          <br className="hidden md:block" />
          {"gives you clear, instant "}
          <br className="hidden md:block" />
          protection that will:
        </h2>
        <div className="space-y-4 text-left max-w-3xl mx-auto mb-8">
          {[
            "Stop floodwater before it enters your property",
            "Install in minutes, no tools or electricity required",
            "Save you lakhs in potential flood damage, downtime & stress",
          ].map((c, f) => (
            <div className="flex items-start gap-3" key={f}>
              <img src={Yn} alt="Tick" className="h-5 mt-1" />
              <p className="text-base sm:text-xl text-left bg-[#eed9bd] font-100 px-1 font-semibold inline">
                {c}
              </p>
            </div>
          ))}
        </div>
        <div className="mb-5">
          <button
            onClick={() =>
              document.getElementById("flood-protection")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }
            className="bg-[#F83232] text-white font-semibold py-5 px-10 rounded-full shadow-[0_8px_0_#8b0000] text-base lg:text-xl transition-all duration-300 hover:bg-[#d42a2a] font-onest"
          >
            Choose your barrier set and place your order now
          </button>
        </div>
        <p className="text-[12px] text-gray-400 mb-8">
          {"Choose your set (3, 5, or 7 barriers) and secure your space before the next downpour.        "}
        </p>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-left px-4">
          <div className="flex flex-col items-center md:items-start">
            <p className="text-2xl font-extrabold">9,200+</p>
            <div className="flex mt-1">
              <img src={Nt} alt="star" className="h-5 mr-1" />
            </div>
          </div>
          <p className="text-[15px] text-gray-600 max-w-xs text-center md:text-left">
            9,200+ homes, shops, and offices across India already protected. Join them before the skies open.
          </p>
          <div className="flex justify-center md:justify-end w-full md:w-auto">
            <img src={Xl} alt="Profiles" className="h-10 object-contain" />
          </div>
        </div>
      </section>
    </>
  ),
  Sp = () => (
    <div className="bg-black-100 px-4 py-10 sm:px-14 md:px-8">
      <div className="max-w-3xl mx-auto text-black">
        <h2 className="text-3xl sm:text-5xl text-center font-bold mb-6">Got some remaining questions?</h2>
        <div className="text-sm sm:text-xl text-black-800 mb-8">
          <p className="mb-2">
            {"That’s completely normal. "}
            <span role="img" aria-label="smile">
              😊
            </span>
          </p>
          <p className="mb-2">I mean, I’ve read 20 reviews before buying a backup generator.</p>
          <p className="mb-2">
            {"So it makes sense to ask questions before investing in something that protects your "}
            <strong>home or business from flooding</strong>.
          </p>
          <p>
            That’s why I’ve put together answers to the most common questions we get about the Storm Water
            Barrier:
          </p>
        </div>
        <div className="space-y-6">
          {[
            {
              id: "1️⃣",
              question: "Can I install the Storm Water Barrier by myself?",
              answer: (
                <>
                  <p className="font-bold mb-2">Absolutely.</p>
                  <p>
                    One person can install 10 meters of barrier in under a minute. No tools, no drilling, and
                    no technical skills required. Just connect, lock, and you're ready.
                  </p>
                </>
              ),
            },
            {
              id: "2️⃣",
              question: "Will it really stop floodwater? How much?",
              answer: (
                <p>
                  {
                    "Yes. The barrier is lab-tested to block up to 70 cm of rising water, thanks to its L-type anti-skid design and Water Memory Foam sealing strip that prevents leaks from underneath. "
                  }
                  <br />
                  <br />
                  It actually gets stronger as water pressure increases—nature doing the work for you.
                </p>
              ),
            },
            {
              id: "3️⃣",
              question: "What kind of properties can use this?",
              answer: (
                <>
                  <p>Pretty much any space you care about keeping dry:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Homes and apartments</li>
                    <li>Shops and storefronts</li>
                    <li>Warehouses, schools, hospitals</li>
                    <li>Even around curves or corners thanks to the ±3° placement flexibility</li>
                  </ul>
                  <p className="mt-2">If floodwater has a way in, this barrier gives you a way to stop it.</p>
                </>
              ),
            },
            {
              id: "4️⃣",
              question: "Is this a one-time use product?",
              answer: (
                <p>
                  Nope. The Storm Water Barrier is reusable for years—made from high-strength, UV-coated ABS
                  plastic with 70 MPa tensile strength. Use it season after season. Just hose it down, dry it,
                  and stack it for storage.
                </p>
              ),
            },
            {
              id: "5️⃣",
              question: "How many barriers do I need?",
              answer: (
                <>
                  <p>
                    Each unit covers 1 meter. We offer pre-packed sets of 3, 5, and 7 barriers, depending on
                    your space:
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>3-Set: for doors, stairways</li>
                    <li>5-Set: for shops, front entrances</li>
                    <li>8-Set: for large gates, basements, institutions</li>
                    <li>Need help estimating? Message us, we’ll guide you.</li>
                  </ul>
                </>
              ),
            },
            {
              id: "6️⃣",
              question: "Can I place an order for an entire apartment complex or institution?",
              answer: (
                <p>
                  Yes! We accept bulk orders for apartments, schools, hospitals, and government sites. Contact
                  our team, and we’ll help you build a flood plan that fits your site layout.
                </p>
              ),
            },
            {
              id: "7️⃣",
              question: "Does it come with a guarantee?",
              answer: (
                <p>
                  One person can install 10 meters of barrier in under a minute. No tools, no drilling, and no
                  technical skills required. Just connect, lock, and you're ready.
                </p>
              ),
            },
            {
              id: "8️⃣",
              question: "I still have a question...",
              answer: (
                <p>
                  {"No problem. Just drop us an email at "}
                  <span className="font-semibold bg-[#B3D8FE] px-1">contact@stonehands.in</span>
                  <br />
                  {"or WhatsApp us at "}
                  <span className="font-semibold bg-[#B3D8FE] px-1">8220002200</span>.<br />
                  We’ll make sure you have everything you need to stay flood-ready.
                </p>
              ),
            },
          ].map(({ id: c, question: f, answer: d }) => (
            <div
              className="bg-[#E8E8E8] rounded-xl p-5 sm:p-6 text-sm sm:text-xl shadow-sm min-h-[280px] flex flex-col justify-between"
              key={c}
            >
              <div>
                <div className="flex items-start gap-3 mb-3">
                  <div className="text-xl sm:text-2xl">{c}</div>
                  <h3 className="font-bold text-lg sm:text-xl">{f}</h3>
                </div>
                <hr className="border-t border-gray-400 mb-3" />
                <div className="text-black-700">{d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
  Cxwp = () => (
    <footer className="bg-white text-center py-6 text-sm text-black mt-0 lg:mt-20">
      <div className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0 items-center justify-center">
        <Ca to="/privacy" target="blank" className="hover:underline">
          Privacy Policy
        </Ca>
        <Ca to="/terms" target="blank" className="hover:underline">
          Terms of Service
        </Ca>
        <Ca to="/return" target="blank" className="hover:underline">
          Return Policy
        </Ca>
        <Ca to="/shipping" target="blank" className="hover:underline">
          Shipping
        </Ca>
      </div>
      <p className="mt-2 text-xs">
        Get in touch with us:{" "}
        <a href="mailto:contact@stonehands.in" className="underline">
          contact@stonehands.in
        </a>
      </p>
    </footer>
  ),
  si = "/assets/inline_cd50b9.svg",
  Ep = () => (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-center mb-6">
        <img src={si} alt="Logo" className="h-16" />
      </div>
      <h1 className="text-3xl font-bold mb-4 text-center">Privacy Policy</h1>
      <p className="mb-4">
        Your privacy is important to us. This Privacy Policy explains how we collect, use, share, and protect
        your personal information when you use our website and services. By accessing or using our website,
        you agree to the terms outlined below.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Information We Collect</h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>Personal Information:</strong>
          {
            " such as name, email address, phone number, billing and shipping address, and payment details when you place an order."
          }
        </li>
        <li>
          <strong>Non-Personal Information:</strong>
          {
            " such as browser type, IP address, device information, and website usage statistics collected automatically through cookies and similar technologies."
          }
        </li>
      </ul>
      <h2 className="text-xl font-semibold mt-6 mb-2">How We Use Your Information</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Processing and fulfilling your orders.</li>
        <li>Sending order confirmations, shipping updates, and support communication.</li>
        <li>Improving our website, products, and services.</li>
        <li>Responding to customer inquiries and providing support.</li>
        <li>Complying with legal obligations.</li>
      </ul>
      <h2 className="text-xl font-semibold mt-6 mb-2">Sharing of Information</h2>
      <p className="mb-4">
        We do not sell or rent your personal data. Information may be shared only in the following
        circumstances:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>With trusted third-party service providers to fulfill your orders.</li>
        <li>To comply with applicable laws or legal requests.</li>
        <li>To protect the rights, safety, or property of our customers and business.</li>
      </ul>
      <h2 className="text-xl font-semibold mt-6 mb-2">Data Security</h2>
      <p className="mb-4">
        We use reasonable security measures to safeguard your personal data from unauthorized access, misuse,
        or disclosure. However, no method of transmission over the internet or electronic storage is 100%
        secure, so we cannot guarantee absolute protection.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Cookies</h2>
      <p className="mb-4">
        Our website uses cookies and similar technologies to enhance your browsing experience, remember
        preferences, and analyze site traffic. You may disable cookies in your browser settings, though this
        may affect functionality.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Your Rights</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Access the personal data we hold about you.</li>
        <li>Request corrections or updates to your personal information.</li>
        <li>Withdraw consent for marketing communications at any time.</li>
        <li>Request deletion of your data, subject to legal and contractual obligations.</li>
      </ul>
      <h2 className="text-xl font-semibold mt-6 mb-2">Third-Party Links</h2>
      <p className="mb-4">
        Our website may contain links to third-party websites. We are not responsible for the privacy
        practices or content of such websites.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">International Users</h2>
      <p className="mb-4">
        If you access our services from outside India, your information may be processed and stored in India.
        By using our services, you consent to the transfer and storage of your information in India.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Policy Updates</h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. The updated policy will be posted here with a
        revised “Last Updated” date.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Contact Us</h2>
      <p className="mb-4">
        If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us at:
      </p>
      <p className="mb-4">📩 support@[yourdomain].in</p>
    </div>
  ),
  Tp = () => (
    <div className="max-w-4xl mx-auto p-8">
      <div className="flex justify-center mb-6">
        <img src={si} alt="Terms & Conditions" className="w-40 h-auto" />
      </div>
      <h1 className="text-3xl font-bold mb-6 text-center">Terms & Conditions</h1>
      <p className="mb-4">
        Welcome to our website. By accessing or using this website, you agree to comply with and be bound by
        the following Terms & Conditions. Please read them carefully before placing an order or using any of
        our services.
      </p>
      <h2 className="text-xl font-semibold mt-6">1. Eligibility</h2>
      <p className="mb-4">
        By using this website, you confirm that you are at least 18 years of age, or accessing under the
        supervision of a parent or guardian who agrees to be bound by these Terms.
      </p>
      <h2 className="text-xl font-semibold mt-6">2. Product Information</h2>
      <p className="mb-4">
        We make every effort to ensure that product descriptions, images, pricing, and availability are
        accurate. However, errors may occasionally occur. We reserve the right to correct such errors and
        update product information without prior notice.
      </p>
      <h2 className="text-xl font-semibold mt-6">3. Pricing & Payment</h2>
      <p className="mb-4">
        All prices are listed in Indian Rupees (INR) and are exclusive of applicable taxes unless otherwise
        mentioned.
      </p>
      <p className="mb-4">Payment must be made in full at the time of placing the order.</p>
      <p className="mb-4">
        We use secure third-party payment gateways. By completing a transaction, you agree to comply with the
        terms and policies of these payment providers.
      </p>
      <h2 className="text-xl font-semibold mt-6">4. Orders & Shipping</h2>
      <p className="mb-4">Orders are processed once payment is received and confirmed.</p>
      <p className="mb-4">
        Shipping timelines are indicative and may vary depending on the delivery location and logistics
        partner.
      </p>
      <p className="mb-4">Tracking details will be shared via email/SMS once the order is dispatched.</p>
      <p className="mb-4">
        For international shipments, customs duties or import taxes (if applicable) must be borne by the
        customer.
      </p>
      <h2 className="text-xl font-semibold mt-6">5. Cancellations, Returns & Refunds</h2>
      <p className="mb-4">Orders may be cancelled only if they have not yet been shipped.</p>
      <p className="mb-4">
        Returns are accepted only under specific conditions outlined in our Return & Refund Policy.
      </p>
      <p className="mb-4">
        Refunds, if applicable, will be processed to the original mode of payment within the stipulated time
        frame.
      </p>
      <h2 className="text-xl font-semibold mt-6">6. Intellectual Property</h2>
      <p className="mb-4">
        All content on this website, including text, graphics, images, logos, product designs, and software,
        is the property of the website owner or its licensors. Unauthorized reproduction, distribution, or
        modification is strictly prohibited.
      </p>
      <h2 className="text-xl font-semibold mt-6">7. Limitation of Liability</h2>
      <p className="mb-4">
        We are not liable for indirect, incidental, or consequential damages arising from the use or misuse of
        products purchased through this website.
      </p>
      <p className="mb-4">Liability, if any, is limited to the value of the product purchased.</p>
      <h2 className="text-xl font-semibold mt-6">8. User Obligations</h2>
      <p className="mb-4">By using this website, you agree that you will not:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Use the website for fraudulent or unlawful purposes.</li>
        <li>Attempt to gain unauthorized access to systems or networks.</li>
        <li>Engage in activities that could harm the website’s integrity or security.</li>
      </ul>
      <h2 className="text-xl font-semibold mt-6">9. Third-Party Links</h2>
      <p className="mb-4">
        This website may contain links to third-party sites. We are not responsible for the content, accuracy,
        or practices of these external sites.
      </p>
      <h2 className="text-xl font-semibold mt-6">10. Governing Law & Jurisdiction</h2>
      <p className="mb-4">
        These Terms & Conditions shall be governed by and construed in accordance with the laws of India. Any
        disputes arising shall be subject to the jurisdiction of courts located in [City, State].
      </p>
      <h2 className="text-xl font-semibold mt-6">11. Policy Updates</h2>
      <p className="mb-4">
        We reserve the right to update or modify these Terms & Conditions at any time without prior notice.
        Updates will be effective immediately upon posting on this page.
      </p>
      <h2 className="text-xl font-semibold mt-6">12. Contact Us</h2>
      <p>
        {"For any queries regarding these Terms & Conditions, please contact us at: 📩 "}
        <b>support@[yourdomain].in</b>
      </p>
    </div>
  ),
  Rp = () => (
    <div className="min-h-screen flex flex-col items-center py-10 px-6">
      <img src={si} alt="Logo" className="w-32 mb-6" />
      <div className="max-w-4xl w-full  rounded-2xl p-8 text-left">
        <h1 className="text-2xl font-bold mb-4 text-center">Return, Refund and Cancellation Policy</h1>
        <h2 className="text-xl font-semibold mt-6 mb-2">Return Policy</h2>
        <p>
          We accept returns only in the case of damage during transit. Your satisfaction and safety are
          paramount, and we ensure every Storm Water Barrier is shipped with utmost care.
        </p>
        <h3 className="font-semibold mt-4">Conditions for Return:</h3>
        <ul className="list-disc ml-6 space-y-1">
          <li>Return requests must be raised within 2 days of delivery.</li>
          <li>The product seal must remain unopened.</li>
          <li>Supporting photos/videos of the damage should be shared with our support team.</li>
        </ul>
        <h3 className="font-semibold mt-4">Procedure:</h3>
        <ul className="list-disc ml-6 space-y-1">
          <li>
            Initiate a return by writing to us at{" "}
            <a href="mailto:support@stonehands.co.in" className="text-blue-600 underline">
              support@stonehands.co.in
            </a>{" "}
            with your email address, order ID, and proof of damage.
          </li>
          <li>Our team will verify the request and arrange for pickup.</li>
          <li>Upon verification, a replacement or refund will be processed.</li>
          <li>
            If the return criteria are not satisfactorily met, the request may be put on hold until further
            clarification.
          </li>
        </ul>
        <p className="mt-2">
          <strong>Timeline:</strong>
          {
            " The 2-day return timeline is calculated from the delivery date of the product and cannot be extended."
          }
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">Cancellation Policy</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Orders can be cancelled only if the product has not yet shipped.</li>
          <li>
            Please request cancellation by writing to{" "}
            <a href="mailto:support@stonehands.co.in" className="text-blue-600 underline">
              support@stonehands.co.in
            </a>
            .
          </li>
          <li>
            Once approved, refunds will be initiated to your original payment source within 7–10 working days.
          </li>
        </ul>
        <h2 className="text-xl font-semibold mt-6 mb-2">Refunds</h2>
        <p>
          Refunds are hassle-free and straightforward if your return is approved. We will keep you informed on
          the status of your refund once the product is returned and verified. Refunds will be credited to
          your source account within 7–10 working days of approval.
        </p>
        <p className="mt-6 italic">
          P.S. If you had a less-than-satisfactory shopping experience with us, please share your feedback at{" "}
          <a href="mailto:support@stonehands.co.in" className="text-blue-600 underline">
            support@stonehands.co.in
          </a>
          . We’re always striving to serve you better.
        </p>
      </div>
    </div>
  ),
  Cp = () => (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="flex justify-center mb-6">
        <img src={si} alt="Logo" className="w-32" />
      </div>
      <h1 className="text-2xl font-bold mb-4">Shipping Policy</h1>
      <p className="mb-4">
        At Stone Hands, we know that protecting your space from flood water is urgent, and you want your Storm
        Water Barrier delivered fast and safely. Rest assured, we’ve got you covered.
      </p>
      <p className="mb-4">
        Once you place your order, you’ll receive a tracking link via email / SMS / WhatsApp so you can follow
        your shipment every step of the way.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Shipping Timeline:</h2>
      <ul className="list-disc list-inside mb-4">
        <li>We take about 3 working days after order confirmation to dispatch your Storm Water Barrier.</li>
        <li>Delivery generally takes 3–10 business days, depending on your location.</li>
      </ul>
      <h2 className="text-xl font-semibold mt-6 mb-2">Pricing & Order Advisory:</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Each Storm Water Barrier is priced at ₹7,200 per piece + GST.</li>
        <li>We do not offer discounts, as this is a high-utility safety product.</li>
        <li>For effective coverage, we strongly recommend purchasing at least 3 pieces.</li>
      </ul>
      <h2 className="text-xl font-semibold mt-6 mb-2">Shipping Cost:</h2>
      <ul className="list-disc list-inside mb-4">
        <li>We offer free shipping across India (exceptions may apply for remote areas).</li>
        <li>
          We’ll keep you updated on your order at every stage. In case you’re unable to track your order or
          need support, simply write to us at{" "}
          <a href="mailto:support@stonehands.co.in" className="text-blue-600 underline">
            support@stonehands.co.in
          </a>
          .
        </li>
      </ul>
      <p className="font-semibold mt-6">
        Your safety is our priority, and we’ll make sure your Storm Water Barrier reaches you on time.
      </p>
    </div>
  );
function Mp() {
  return (
    <>
      <Cxjy />
      <Ty />
      <Ry />
      <My />
      <Cxzy />
      <Dy />
      <Cxqy />
      <Gy />
      <Vy />
      <Ky />
      <Wy />
      <Fy />
      <Cxep />
      <Ap />
      <Cxjp />
      <Sp />
      <Np />
      <Cxwp />
    </>
  );
}
function Op() {
  return (
    <BrowserRouter>
      <Routes>
        <Ra path="/" element={<Mp />} />
        <Ra path="/privacy" element={<Ep />} />
        <Ra path="/terms" element={<Tp />} />
        <Ra path="/return" element={<Rp />} />
        <Ra path="/shipping" element={<Cp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Op;
