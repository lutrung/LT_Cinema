import React from 'react'
import FormPhim from './Form';
export default function ThemPhim(props) {
    return (
        <div className='taoLichChieu_content'>
            {/* Button */}
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#themPhimModal">
                Thêm phim
            </button>
            <div className="modal fade" id="themPhimModal" tabIndex={-1} aria-labelledby="themPhimModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2 className="modal-title" id="themPhimModalLabel">Thêm Phim</h2>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <FormPhim />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
