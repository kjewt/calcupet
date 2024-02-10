// import { styled } from '@emotion/styled'
import { Link } from "react-router-dom"

export const Nav = () => {



    return (
        <nav className="p-16 bg-base-100 flex justify-center">
            <h1 className="btn btn-ghost normal-case text-2xl text-primary hover:bg-transparent">
                <Link to="/">PetCal</Link></h1>
        </nav>


    )
}

