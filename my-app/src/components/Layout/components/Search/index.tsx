import Tippy from '@tippyjs/react';
import React, { useRef, useState } from 'react';
import Propper from '../../../Propper';
import AccountItem from '../../../AccountItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import styles from './Search.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState<any[]>([]);
    const [showResult, setShowResult] = useState(false);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleClear = () => {
        // xóa kết quả và đóng dropdown
        setSearchValue('');
        setSearchResult([]);
        setShowResult(false);
        inputRef.current?.focus();
    };

    const handleOutside = () => {
        // khi click outside: đóng
        setShowResult(false);
    };

    const handleFocus = () => {
        if (searchValue.trim() !== '' && searchResult.length > 0) {
            setShowResult(true);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const v = e.target.value;
        setSearchValue(v);

        if (v.trim() === '') {
            setSearchResult([]);
            setShowResult(false);
            return;
        }

        // giả lập kết quả trả về
        setSearchResult([1, 2, 3]);
        setShowResult(true);
    };

    return (
        <div className={cx('search-wrapper')}>
            <Tippy
                interactive
                visible={showResult && searchResult.length > 0}
                onClickOutside={handleOutside}
                render={attrs =>
                    // render chỉ khi có kết quả (nên dropdown sẽ biến mất nếu kết quả bị xóa)
                    showResult && searchResult.length > 0 ? (
                        <div className={cx('search-result')} tabIndex={-1} {...attrs}>
                            <Propper>
                                <h4 className={cx('search-label')}>Accounts</h4>
                                {searchResult.map((_, i) => (
                                    <AccountItem key={i} />
                                ))}
                            </Propper>
                        </div>
                    ) : null
                }
            >
                {/* target của Tippy: input + nút */}
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        type="text"
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                    />
                    {searchValue && (
                        <button type="button" className={cx('clear')} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    <button className={cx('search-btn', { active: searchValue.trim() !== '' })}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </Tippy>
        </div>
    );
}
