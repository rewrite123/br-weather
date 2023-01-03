import React, { HTMLProps, useState } from 'react';
import StylingPropsInterface from '../../interfaces/StylingPropsInterface';

export interface CarouselPropsInterface extends StylingPropsInterface {
  pages: React.ReactNode[]; // Elements we are rendering as options on the switch
  title?: React.ReactNode; // Title for all pages
  pageTitles?: React.ReactNode[]; // Titles for each page
  defaultSelected?: number; // index of the selected ^
  onSelect?: (selectedIndex: number) => void;
}

const Carousel = (props: CarouselPropsInterface) => {
  // Index of the selected element
  const [selected, setSelected] = useState(
    props.defaultSelected != undefined ? props.defaultSelected : 0,
  );

  const pageTitleGenerator = (): React.ReactNode => {
    if (props.title) {
      return (
        <div className="brw-carousel-selector-center-title">{props.title}</div>
      );
    } else if (props.pageTitles != null) {
      if (props.pageTitles[selected]) {
        return (
          <div className="brw-carousel-selector-center-title">
            {props.pageTitles[selected]}
          </div>
        );
      } else {
        return (
          <div className="brw-carousel-selector-center-title">
            <>&nbsp;</>
          </div>
        );
      }
    }
    return <></>;
  };

  return (
    <div
      className={`brw-carousel ${props.className || ''}`.trim()} // Add any provided classnames to brw-carousel
      style={props.style || undefined}
    >
      <div className="brw-carousel-selector">
        <div
          onClick={() => {
            setSelected(
              selected - 1 >= 0 ? selected - 1 : props.pages.length - 1,
            );
          }}
          className="brw-carousel-selector-arrow"
        >
          <div className="brw-carousel-selector-arrow-center">&lsaquo;</div>
        </div>
        <div className="brw-carousel-selector-center">
          {pageTitleGenerator()}
          <div className="brw-carousel-selector-center-bullets">
            {props.pages.map((pageElement, pageIndex) => {
              return (
                <span
                  key={pageIndex}
                  onClick={() => {
                    setSelected(pageIndex);
                    if (props.onSelect != null) {
                      props.onSelect(pageIndex);
                    }
                  }}
                  className={`brw-carousel-selector-center-bullets-el ${
                    selected == pageIndex ? 'brw-active' : ''
                  }`.trim()}
                >
                  &bull;
                </span>
              );
            })}
          </div>
        </div>
        <div
          onClick={() => {
            setSelected(selected + 1 < props.pages.length ? selected + 1 : 0);
          }}
          className="brw-carousel-selector-arrow"
        >
          <div className="brw-carousel-selector-arrow-center">&rsaquo;</div>
        </div>
      </div>
      <div className="brw-carousel-pages">
        {props.pages.map((pageElement, pageIndex) => {
          return (
            <div
              key={pageIndex}
              className={`brw-carousel-pages-el ${
                selected == pageIndex ? 'brw-active' : ''
              }`.trim()}
            >
              {pageElement}
            </div>
          );
        })}
      </div>
    </div>
  );
};
Carousel.defaultProps = {
  defaultSelected: 0,
};
export default Carousel;
