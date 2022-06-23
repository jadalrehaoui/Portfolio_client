import React from 'react';

export default ({children}) => {
  return (
    <div className="modal fade portfolio-modal" id="portfolioModal" tabIndex="-1" role="dialog" aria-hidden="true">
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}
