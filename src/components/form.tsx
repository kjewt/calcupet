import { Link } from "react-router-dom"
import { AiFillStar } from 'react-icons/ai';
import { API_test } from "./API/ApiTest";

export const Form = () => {

    return (
        <>
            <form className="p-6">
                <input type="text" placeholder="할 일을 입력하세요" className="input input-bordered input-primary w-full max-w-xs mr-2" />
                <button type="submit" className="btn btn-primary">등록</button>
            </form>
            <div className="flex flex-col gap-2 p-20">
                <API_test />
                <Link to="/booking" className="btn btn-primary">예약페이지</Link>
                <Link to="/addOffice" className="btn btn-primary  btn-outline">오피스추가</Link>
            </div>
            <div className="grid justify-center grid-cols-4 gap-6">
                <figure>
                    <img className="rounded-xl" src="https://picsum.photos/320" alt="Shoes" />
                    <div className="text-left">
                        <div className="flex justify-between items-center">
                            <p className="font-bold text-base tracking-tight">선릉 더 공간A</p>
                            <div className="flex gap-1 items-center">
                                <AiFillStar className="flex " />
                                <p className="font-bold text-sm tracking-tight">4.91(21)</p>
                            </div>
                        </div>
                        <p className="font-medium text-sm">서울시 강남구 테헤란로70번길 14-10</p>
                        <p className="font-medium text-sm">200m</p>
                        <p className="font-medium text-sm">월 500,000</p>
                    </div>

                </figure>
                <figure>
                    <img className="rounded-xl" src="https://picsum.photos/320" alt="Shoes" />
                </figure>
                <figure>
                    <img className="rounded-xl" src="https://picsum.photos/320" alt="Shoes" />
                </figure>
                <figure>
                    <img className="rounded-xl" src="https://picsum.photos/320" alt="Shoes" />
                </figure>
                <figure>
                    <img className="rounded-xl" src="https://picsum.photos/320" alt="Shoes" />
                </figure>
                <figure>
                    <img className="rounded-xl" src="https://picsum.photos/320" alt="Shoes" />
                </figure>
            </div>

        </>
    )
}

