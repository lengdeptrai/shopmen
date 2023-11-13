import React, { useEffect, useRef, useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import style from './Search.module.scss';

const cx = classNames.bind(style);

function Search() {

    const [searchValue, setSearchValue] = useState('')
    const [searchResult, setSeachResult] = useState([])
    const [showResult, setShowResult] = useState(true)

    const inputRef = useRef()

    useEffect(() => {
        setTimeout(() => {
            setSeachResult([1, 22, 0])
        }, 0)
    }, [])


    const handleClear = () => {
        setSearchValue('')
        inputRef.current.focus()
    }

    const handleHideResult = () => {
        setShowResult(false)
    }


    return (
        <Tippy
            onClickOutside={handleHideResult}
            interactive
            visible={showResult && searchResult.length > 0}
            render={attrs => (
                <div className={cx('seach-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        RESULT SEACH
                    </PopperWrapper>
                </div>
            )}
        >
            <div className={cx('seach')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder='Tìm kiếm sản phẩm'
                    spellCheck={false}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={(e) => setShowResult(true)}
                />
                <button className={cx('clean-btn')} onClick={handleClear}>
                    <FontAwesomeIcon icon={faCircleXmark} />
                </button>
                <button className={cx('seach-btn')} >
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </Tippy>
    );
}

export default Search;