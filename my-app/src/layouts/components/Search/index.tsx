import Tippy from '@tippyjs/react';
import React, { useEffect, useRef, useState } from 'react';
import Propper from '../../../components/Propper';
import AccountItem from '../../../components/AccountItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import styles from './Search.module.scss';
import classNames from 'classnames/bind';
import useDebounce from '../../../hooks/useDebounce';
import axios from 'axios';
import request from '../../../utils/api';
import { searchUsers } from '../../../services/userService';
import api from '../../../utils/api';

const cx = classNames.bind(styles);

export default function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState<any[]>([]);
    const [show, setShow] = useState(false);
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [loading, setLoading] = useState(false);
    const debouncedValue = useDebounce(searchValue, 250);

    useEffect(() => {
        if (!debouncedValue.trim()) {
            return
        }

        //call api bang ham
        const fetchSearch = async (value: string) => {
            setLoading(true);
            try {
                const data = await searchUsers(value);
                setSearchResult(data);
            } finally {
                setLoading(false);
            }
        };
        fetchSearch(debouncedValue)

        // setLoading(true)

        //fetch
        // fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debouncedValue)}&type=less`)
        //     .then(res => res.json())
        //     .then(res => {
        //         setSearchResult(res.data)
        //         setLoading(false)
        //     })
        //     .catch(() => {
        //         setLoading(false)
        //     })

        //axios
        // axios
        //     .get(`https://tiktok.fullstack.edu.vn/api/users/search`, {
        //         params: {
        //             q: debouncedValue,
        //             type: 'less'
        //         }
        //     })
        //     .then(res => {
        //         console.log(res.data.data)
        //         setSearchResult(res.data.data )
        //         setLoading(false)
        //     })
        //     .catch(() => {
        //         setLoading(false)
        //     })

        //api
        // api
        //     .get(`/users/search`, {
        //         params: {
        //             q: debouncedValue,
        //             type: 'less'
        //         }
        //     })
        //     .then(res => {
        //         console.log(res.data.data)
        //         setSearchResult(res.data.data)
        //         setLoading(false)
        //     })
        //     .catch(() => {
        //         setLoading(false)
        //     })

    }, [debouncedValue])

    const handleClear = () => {
        // xóa kết quả và đóng dropdown
        setSearchValue('');
        setSearchResult([]);
        setShow(false);
        inputRef.current?.focus();
    };

    const handleOutside = () => {
        // khi click outside: đóng
        setShow(false);
    };

    const handleFocus = () => {
        if (searchValue.trim() !== '' && searchResult.length > 0) {
            setShow(true);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const v = e.target.value;

        if (v.startsWith(' ')) {
            return
        }

        setSearchValue(v);

        if (v.trim() === '') {
            setSearchResult([]);
            setShow(false);
            return;
        }

        // giả lập kết quả trả về
        setShow(true);
    };

    return (
        <div className={cx('search-wrapper')}>
            <Tippy
                interactive
                visible={show && searchResult.length > 0}
                onClickOutside={handleOutside}
                render={attrs =>
                    // render chỉ khi có kết quả (nên dropdown sẽ biến mất nếu kết quả bị xóa)
                    show && searchResult.length > 0 ? (
                        <div className={cx('search-result')} tabIndex={-1} {...attrs}  >
                            <Propper>
                                <h4 className={cx('search-label')}>Accounts</h4>
                                {searchResult.map((result: any, i: any) => (
                                    <AccountItem key={i} data={result} onClick={() => setShow(false)} />
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
                    {searchValue && !loading && (
                        <button type="button" className={cx('clear')} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                    <button className={cx('search-btn', { active: searchValue.trim() !== '' })}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </Tippy>
        </div>
    );
}
