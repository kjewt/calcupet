
export const Form = () => {

    return (
        <>
            <form>
                <input type="text" placeholder="할 일을 입력하세요" className="input input-bordered input-primary w-full max-w-xs mr-2" />
                <button type="submit" className="btn btn-primary">등록</button>
            </form>
        </>
    )
}

