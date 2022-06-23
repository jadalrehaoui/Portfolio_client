import React from 'react';

export default ({data}) => {
  return (
    <div className="modal-body col-md-11 col-lg-9 ml-auto mr-auto">

      <p className="portfolio-modal__title">{data.title}</p>

      <img className="portfolio-modal__img" src="assets/img/img_project_1_mono.png" alt="modal_img"/>
      <p className="portfolio-modal__description">
        {data.description}
      </p>
      <div className="portfolio-modal__link">
        <a href={data.link}>{data.link.split("//")[1]}</a>
      </div>
      <div  className="portfolio-modal__stack">
        <p className="portfolio-modal__stack-title">Using stack:</p>
        <ul className="tags">
        {
          data.stack_items.map((item, i) =>{
            return <li key={"project-modal-stack-"+i}>{item.name}</li>
          })
        }
        </ul>
      </div>
    </div>
  )
}
