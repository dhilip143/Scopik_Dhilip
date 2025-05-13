import pus from '/src/assets/sup.png';

function Support() {
    return (
        <>
       
                  <div className="relative w-full">
            <img className="w-full" src={pus} alt="support" />
            <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-8xl font-semibold text-[#132E65] ">
                support
            </h1>
        </div>


                 <div className='  item-center text-center'>
                    <h1 className='text-[#5731FF] text-lg'>Get  In Touch</h1>
                    <h1 className='text-[#00005C] text-2xl'>Let us help you</h1>
                    <h1 className='text-[020202] text-sm'>In this digital marketing course, you will gain a comprehensive understanding of online marketing<br></br> strategies and tools to grow businesses effectively.</h1>
                 </div>

            <div className="flex  bg-[#FAFCFF] h-[726px] px-6 py-6  ">
  <div className='ml-[30px] mt-[45px]'>
    <h1 className='text-[#5731FF] text-xl'>Any Enquiry </h1>
    <h1 className='text-[#00005C] text-4xl'>Have any questions? don’t hesitate to <br></br>
      contact us</h1>
    <h1 className='text-base mt-[15px]'>In this digital marketing course, you will gain a comprehensive<br></br>
      understanding of online marketing strategies and tools to grow <br></br>businesses effectively.In this digital marketing course, you will gain a<br></br> comprehensive understanding of online marketing strategies and tools to <br></br>grow businesses effectively.</h1>
  </div>

  <div className='h-[490px] w-[366px] bg-[#E7F1FB] p-6 rounded-xl ml-auto mt-[45px] '>
    <h1 className='text-[#00005C] text-2xl font-semibold text-center mb-4'>Get in Touch</h1>

    <h1 className="text-[#00005C] mb-1">Name</h1>
    <input className="w-full mb-3 p-2 rounded-md" />

    <h1 className="text-[#00005C] mb-1">E-mail</h1>
    <input className="w-full mb-3 p-2 rounded-md" />

    <h1 className="text-[#00005C] mb-1">Phone no.</h1>
    <input className="w-full mb-3 p-2 rounded-md" />

    <h1 className="text-[#00005C] mb-1">Message</h1>
    <input className="w-full mb-4 p-2 rounded-md" />

    <button className="bg-[#00005C] text-white px-6 py-2 rounded-md float-right">Send</button>
  </div>
</div>



          
            
           
        </>
    );
}

export default Support;
