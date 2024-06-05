const Users = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <h4 className="text-2xl">TESTIMONIAL</h4>
        <h1 className="text-5xl font-extrabold mt-2">
          What Our Users
          <br />
          Say About Us?
        </h1>
      </div>
      {/* user*/}
      <div className="flex items-center mt-20 justify-around">
        <div>
          <img src="/hero/users.png" width={550} height={550} alt="" />
        </div>
            {/* user images section */}
        <div className="">
          <h1 className="text-2xl font-extrabold mb-4">
            The Best Financial Accounting
            <br />
            App Ever!
          </h1>
          <p className="text-gray-400">
            "Arcu At Dictum Sapien, Mollis Vulputate Sit Id
            <br /> Accumsan, Utricies.In Utrices Makesuada Elit
            <br />
            Maurise Etiam Odio, Duis Tristique Lacus, Et Blandit
            <br /> Viverra Nisi VEkit. Send Mattis Rhoncus, Diam"
          </p>
          {/* user iamges */}
          <div className="flex gap-3 items-center my-6">
            <img src="/hero/user1.png" width={60} height={60} alt="" />
            <img
              className="opacity-40"
              src="/hero/user2.png"
              width={40}
              height={40}
              alt=""
            />
            <img
              className="opacity-40"
              src="/hero/user3.png"
              width={40}
              height={40}
              alt=""
            />
            <img
              className="opacity-40"
              src="/hero/user4.png"
              width={40}
              height={40}
              alt=""
            />
            <img
              className="opacity-40"
              src="/hero/user5.png"
              width={40}
              height={40}
              alt=""
            />
          </div>
          <h2 className="font-extrabold">Nick Jonas</h2>
        </div>
      </div>
    </div>
  );
};

export default Users;
