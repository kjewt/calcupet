import { MdContentCopy } from 'react-icons/md';
export const Booking = () => {

    return (

        <>

            <div className="m-8">
                <div className="flex gap-4">

                    <figure className="flex flex-col w-80 gap-1">
                        <img className="rounded-xl " src="https://picsum.photos/350" alt="sample" />
                        <div className="flex gap-1">
                            <button className="btn btn-primary my-1 w-1/2 text-[0.7rem]">전체 리스트보기</button>
                            <button className="btn btn-primary btn-outline my-1 w-1/2 text-[0.7rem]">문의하기</button>
                        </div>
                    </figure>
                    <div className="text-left rounded-xl w-full shadow-md p-8">
                        <p className="font-medium text-base tracking-tight">파란 인베스트먼트</p>
                        {/* <p className="font-medium text-sm">파란 인베스트먼트</p> */}
                        <div className="flex gap-1 cursor-pointer items-center">
                            <p className="font-light text-sm">조마루로385번길 92번(도로명)</p>
                            <MdContentCopy className="flex " />
                        </div>
                        <button className="btn btn-primary my-4 w-full">큰버튼</button>
                    </div>
                </div>

            </div>
            <div className="m-8">
                <div className="text-left rounded-xl w-full shadow-md p-8">
                    <div className='text-primary text-base font-bold'> Options</div>


                    <hr className="my-4" />
                    <button className="btn w-52 my-4">중간크기</button>
                    <br />

                </div>
            </div>
        </>
    )
}