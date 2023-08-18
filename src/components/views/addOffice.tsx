import { useState } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import { Dropdown } from '../common/Dropdown';
import { Options } from '../common/options';


export const AddOffice = (props: { width: string }): JSX.Element => {
    const [selectedItem, setSelectedItem] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const handleItemClick = (item: string) => {
        setSelectedItem(item);

        setIsOpen(false);
    };

    const toggleDropDown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='flex flex-col gap-4'>
            <div className={`form-control  ${props.width}`}>
                <label className="label">
                    <span className="label-text">최대 인원수를 선택하세요.</span>
                </label>
                <div className="dropdown" >
                    <label tabIndex={0} className="group btn btn-primary btn-outline justify-between w-full hover:" onClick={toggleDropDown} >
                        <span className="label-text group-hover:text-white">{selectedItem}</span>
                        <RiArrowDropDownLine className="text-2xl" />
                    </label>
                    <ul tabIndex={0} className={`dropdown-content overflow-scroll h-52 w-full z-[1] menu p-2 shadow bg-base-100 rounded-box ${isOpen ? '' : 'hidden'}`}>
                        <li><a onClick={() => handleItemClick('1인')}>1인</a></li>
                        <li><a onClick={() => handleItemClick('2인')}>2인</a></li>
                        <li><a onClick={() => handleItemClick('3인')}>3인</a></li>
                        <li><a onClick={() => handleItemClick('4인')}>4인</a></li>
                        <li><a onClick={() => handleItemClick('5인')}>5인</a></li>
                        <li><a onClick={() => handleItemClick('5인')}>6인</a></li>
                        <li><a onClick={() => handleItemClick('5인')}>7인</a></li>
                        <li><a onClick={() => handleItemClick('5인')}>8인</a></li>
                        <li><a onClick={() => handleItemClick('5인')}>9인</a></li>
                        <li><a onClick={() => handleItemClick('10인 이상')}>10인 이상</a></li>

                    </ul>
                </div>
            </div>
            <Dropdown width="w-32" />
            <Options />
        </div>
    );
};


