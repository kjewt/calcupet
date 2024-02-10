import { useState } from 'react';

export const PetControl = () => {
    const [selectedPet, setSelectedPet] = useState<boolean>(true);
    console.log(selectedPet)
    const handleCheckboxChange = () => {
        setSelectedPet((prev) => !prev);
    };

    const handleResetClick = () => {
        setSelectedPet(false);
    };


    return (
        <section>
            <div className="flex justify-center p-4 gap-4">
                <label className="flex gap-2 p-3">
                    <h3 className="label-text cursor-pointer">고양이</h3>
                    <input
                        type="checkbox"
                        checked={selectedPet}
                        onChange={handleCheckboxChange}
                        className="toggle [--tglbg:#ffffff] bg-primary border-primary"
                    />
                    {/* 기본이 고양이, 강아지가 선택 */}
                    <h3 className="label-text cursor-pointer">강아지</h3>
                </label>
                <button onClick={handleResetClick} className="btn">
                    초기화
                </button>
            </div>
        </section>
    );
};
