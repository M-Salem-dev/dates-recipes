$(document).ready(function(){
$(function () {
  (function (name) {
    var container = $("#pagination-" + name);
    if (!container.length) return;
    var sources = (function () {
      var result = [
        `      <div class="video-item">
      <div class="img-wrap mb-3 position-relative">
        <iframe
          width="100%"
          height="250"
          src="https://www.youtube.com/embed/GWs0VTeinSs"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div class="content px-3 pb-3">
        <h5 class="w-100 text-center pb-3 d-block">
          بنانا بريد بالتمر
        </h5>
        <div
          class="p-2 d-flex w-100 mt-4 align-items-center justify-content-between"
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style="width: 20px; height: 20px"
              width="34"
              height="34"
              viewBox="0 0 34 34"
            >
              <g id="svgexport-9" transform="translate(-10 -10)">
                <path
                  id="Path_5709"
                  data-name="Path 5709"
                  d="M38.97,10h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H38.97a.692.692,0,0,1-.691-.691V10.691A.692.692,0,0,1,38.97,10ZM10.691,30.482H15.03a.692.692,0,0,1,.691.691V43.309A.692.692,0,0,1,15.03,44H10.691A.692.692,0,0,1,10,43.309V31.173A.692.692,0,0,1,10.691,30.482Zm9.426-6.827h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H20.117a.692.692,0,0,1-.691-.691V24.346A.692.692,0,0,1,20.117,23.655Zm9.426-6.827h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H29.544a.692.692,0,0,1-.691-.691V17.518a.692.692,0,0,1,.691-.691Z"
                  fill="#3d3d3d"
                  fill-rule="evenodd"
                />
              </g>
            </svg>
            <span class="text-primary h5 p-0 m-0 pt-1 me-2"
              >سهلة</span
            >
          </div>
          <div class="d-flex align-items-center text-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style="width: 20px; height: 20px"
              width="34"
              height="34"
              viewBox="0 0 34 34"
            >
              <path
                id="icons8_clock"
                d="M17,0A17,17,0,1,0,34,17,17,17,0,0,0,17,0Zm0,2.833A14.167,14.167,0,1,1,2.833,17,14.166,14.166,0,0,1,17,2.833ZM15.495,5.49l-.62,11.6.133,1.24,8.721,7.7L25.1,24.615l-7.216-7.659L17.266,5.49Z"
                fill="#3d3d3d"
              />
            </svg>
            <span class="text-primary h5 p-0 m-0 pt-1 me-2"
              >48 ث</span
            >
          </div>
        </div>
      </div>
    </div>`,
        `      <div class="video-item">
  <div class="img-wrap mb-3 position-relative">
    <iframe
      width="100%"
      height="250"
      src="https://www.youtube.com/embed/cQx-RhgeTgo"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
  <div class="content px-3 pb-3">
    <h5 class="w-100 text-center pb-3 d-block">بودينج التمر</h5>
    <div
      class="p-2 d-flex w-100 mt-4 align-items-center justify-content-between"
    >
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style="width: 20px; height: 20px"
          width="34"
          height="34"
          viewBox="0 0 34 34"
        >
          <g id="svgexport-9" transform="translate(-10 -10)">
            <path
              id="Path_5709"
              data-name="Path 5709"
              d="M38.97,10h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H38.97a.692.692,0,0,1-.691-.691V10.691A.692.692,0,0,1,38.97,10ZM10.691,30.482H15.03a.692.692,0,0,1,.691.691V43.309A.692.692,0,0,1,15.03,44H10.691A.692.692,0,0,1,10,43.309V31.173A.692.692,0,0,1,10.691,30.482Zm9.426-6.827h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H20.117a.692.692,0,0,1-.691-.691V24.346A.692.692,0,0,1,20.117,23.655Zm9.426-6.827h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H29.544a.692.692,0,0,1-.691-.691V17.518a.692.692,0,0,1,.691-.691Z"
              fill="#3d3d3d"
              fill-rule="evenodd"
            />
          </g>
        </svg>
        <span class="text-primary h5 p-0 m-0 pt-1 me-2">سهلة</span>
      </div>
      <div class="d-flex align-items-center text-start">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style="width: 20px; height: 20px"
          width="34"
          height="34"
          viewBox="0 0 34 34"
        >
          <path
            id="icons8_clock"
            d="M17,0A17,17,0,1,0,34,17,17,17,0,0,0,17,0Zm0,2.833A14.167,14.167,0,1,1,2.833,17,14.166,14.166,0,0,1,17,2.833ZM15.495,5.49l-.62,11.6.133,1.24,8.721,7.7L25.1,24.615l-7.216-7.659L17.266,5.49Z"
            fill="#3d3d3d"
          />
        </svg>
        <span class="text-primary h5 p-0 m-0 pt-1 me-2">52 ث</span>
      </div>
    </div>
  </div>
</div>`,
        ` <div class="video-item">
<div class="img-wrap mb-3 position-relative">
  <iframe
    width="100%"
    height="250"
    src="https://www.youtube.com/embed/SdI6YFT68wQ"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</div>
<div class="content px-3 pb-3">
  <h5 class="w-100 text-center pb-3 d-block">كوكيز بالتمر</h5>
  <div
    class="p-2 d-flex w-100 mt-4 align-items-center justify-content-between"
  >
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style="width: 20px; height: 20px"
        width="34"
        height="34"
        viewBox="0 0 34 34"
      >
        <g id="svgexport-9" transform="translate(-10 -10)">
          <path
            id="Path_5709"
            data-name="Path 5709"
            d="M38.97,10h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H38.97a.692.692,0,0,1-.691-.691V10.691A.692.692,0,0,1,38.97,10ZM10.691,30.482H15.03a.692.692,0,0,1,.691.691V43.309A.692.692,0,0,1,15.03,44H10.691A.692.692,0,0,1,10,43.309V31.173A.692.692,0,0,1,10.691,30.482Zm9.426-6.827h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H20.117a.692.692,0,0,1-.691-.691V24.346A.692.692,0,0,1,20.117,23.655Zm9.426-6.827h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H29.544a.692.692,0,0,1-.691-.691V17.518a.692.692,0,0,1,.691-.691Z"
            fill="#3d3d3d"
            fill-rule="evenodd"
          />
        </g>
      </svg>
      <span class="text-primary h5 p-0 m-0 pt-1 me-2">سهلة</span>
    </div>
    <div class="d-flex align-items-center text-start">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style="width: 20px; height: 20px"
        width="34"
        height="34"
        viewBox="0 0 34 34"
      >
        <path
          id="icons8_clock"
          d="M17,0A17,17,0,1,0,34,17,17,17,0,0,0,17,0Zm0,2.833A14.167,14.167,0,1,1,2.833,17,14.166,14.166,0,0,1,17,2.833ZM15.495,5.49l-.62,11.6.133,1.24,8.721,7.7L25.1,24.615l-7.216-7.659L17.266,5.49Z"
          fill="#3d3d3d"
        />
      </svg>
      <span class="text-primary h5 p-0 m-0 pt-1 me-2">19 ث</span>
    </div>
  </div>
</div>
</div>`,
        `    <div class="video-item">
<div class="img-wrap mb-3 position-relative">
  <iframe
    width="100%"
    height="250"
    src="https://www.youtube.com/embed/EzEqCLEJySo"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</div>
<div class="content px-3 pb-3">
  <h5 class="w-100 text-center pb-3 d-block">معمول التمر</h5>
  <div
    class="p-2 d-flex w-100 mt-4 align-items-center justify-content-between"
  >
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style="width: 20px; height: 20px"
        width="34"
        height="34"
        viewBox="0 0 34 34"
      >
        <g id="svgexport-9" transform="translate(-10 -10)">
          <path
            id="Path_5709"
            data-name="Path 5709"
            d="M38.97,10h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H38.97a.692.692,0,0,1-.691-.691V10.691A.692.692,0,0,1,38.97,10ZM10.691,30.482H15.03a.692.692,0,0,1,.691.691V43.309A.692.692,0,0,1,15.03,44H10.691A.692.692,0,0,1,10,43.309V31.173A.692.692,0,0,1,10.691,30.482Zm9.426-6.827h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H20.117a.692.692,0,0,1-.691-.691V24.346A.692.692,0,0,1,20.117,23.655Zm9.426-6.827h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H29.544a.692.692,0,0,1-.691-.691V17.518a.692.692,0,0,1,.691-.691Z"
            fill="#3d3d3d"
            fill-rule="evenodd"
          />
        </g>
      </svg>
      <span class="text-primary h5 p-0 m-0 pt-1 me-2">سهلة</span>
    </div>
    <div class="d-flex align-items-center text-start">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style="width: 20px; height: 20px"
        width="34"
        height="34"
        viewBox="0 0 34 34"
      >
        <path
          id="icons8_clock"
          d="M17,0A17,17,0,1,0,34,17,17,17,0,0,0,17,0Zm0,2.833A14.167,14.167,0,1,1,2.833,17,14.166,14.166,0,0,1,17,2.833ZM15.495,5.49l-.62,11.6.133,1.24,8.721,7.7L25.1,24.615l-7.216-7.659L17.266,5.49Z"
          fill="#3d3d3d"
        />
      </svg>
      <span class="text-primary h5 p-0 m-0 pt-1 me-2">37 ث</span>
    </div>
  </div>
</div>
</div>`,
        `    <div class="video-item">
<div class="img-wrap mb-3 position-relative">
  <iframe
    width="100%"
    height="250"
    src="https://www.youtube.com/embed/a8fIzE7IuNQ"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</div>
<div class="content px-3 pb-3">
  <h5 class="w-100 text-center pb-3 d-block">
    سينامون رول بالتمر
  </h5>
  <div
    class="p-2 d-flex w-100 mt-4 align-items-center justify-content-between"
  >
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style="width: 20px; height: 20px"
        width="34"
        height="34"
        viewBox="0 0 34 34"
      >
        <g id="svgexport-9" transform="translate(-10 -10)">
          <path
            id="Path_5709"
            data-name="Path 5709"
            d="M38.97,10h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H38.97a.692.692,0,0,1-.691-.691V10.691A.692.692,0,0,1,38.97,10ZM10.691,30.482H15.03a.692.692,0,0,1,.691.691V43.309A.692.692,0,0,1,15.03,44H10.691A.692.692,0,0,1,10,43.309V31.173A.692.692,0,0,1,10.691,30.482Zm9.426-6.827h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H20.117a.692.692,0,0,1-.691-.691V24.346A.692.692,0,0,1,20.117,23.655Zm9.426-6.827h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H29.544a.692.692,0,0,1-.691-.691V17.518a.692.692,0,0,1,.691-.691Z"
            fill="#3d3d3d"
            fill-rule="evenodd"
          />
        </g>
      </svg>
      <span class="text-primary h5 p-0 m-0 pt-1 me-2">سهلة</span>
    </div>
    <div class="d-flex align-items-center text-start">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style="width: 20px; height: 20px"
        width="34"
        height="34"
        viewBox="0 0 34 34"
      >
        <path
          id="icons8_clock"
          d="M17,0A17,17,0,1,0,34,17,17,17,0,0,0,17,0Zm0,2.833A14.167,14.167,0,1,1,2.833,17,14.166,14.166,0,0,1,17,2.833ZM15.495,5.49l-.62,11.6.133,1.24,8.721,7.7L25.1,24.615l-7.216-7.659L17.266,5.49Z"
          fill="#3d3d3d"
        />
      </svg>
      <span class="text-primary h5 p-0 m-0 pt-1 me-2">48 ث</span>
    </div>
  </div>
</div>
</div>`,
        `   <div class="video-item">
<div class="img-wrap mb-3 position-relative">
  <iframe
    width="100%"
    height="250"
    src="https://www.youtube.com/embed/chNwge-Ij0g"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</div>
<div class="content px-3 pb-3">
  <h5 class="w-100 text-center pb-3 d-block">سلطة التمر</h5>
  <div
    class="p-2 d-flex w-100 mt-4 align-items-center justify-content-between"
  >
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style="width: 20px; height: 20px"
        width="34"
        height="34"
        viewBox="0 0 34 34"
      >
        <g id="svgexport-9" transform="translate(-10 -10)">
          <path
            id="Path_5709"
            data-name="Path 5709"
            d="M38.97,10h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H38.97a.692.692,0,0,1-.691-.691V10.691A.692.692,0,0,1,38.97,10ZM10.691,30.482H15.03a.692.692,0,0,1,.691.691V43.309A.692.692,0,0,1,15.03,44H10.691A.692.692,0,0,1,10,43.309V31.173A.692.692,0,0,1,10.691,30.482Zm9.426-6.827h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H20.117a.692.692,0,0,1-.691-.691V24.346A.692.692,0,0,1,20.117,23.655Zm9.426-6.827h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H29.544a.692.692,0,0,1-.691-.691V17.518a.692.692,0,0,1,.691-.691Z"
            fill="#3d3d3d"
            fill-rule="evenodd"
          />
        </g>
      </svg>
      <span class="text-primary h5 p-0 m-0 pt-1 me-2">سهلة</span>
    </div>
    <div class="d-flex align-items-center text-start">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style="width: 20px; height: 20px"
        width="34"
        height="34"
        viewBox="0 0 34 34"
      >
        <path
          id="icons8_clock"
          d="M17,0A17,17,0,1,0,34,17,17,17,0,0,0,17,0Zm0,2.833A14.167,14.167,0,1,1,2.833,17,14.166,14.166,0,0,1,17,2.833ZM15.495,5.49l-.62,11.6.133,1.24,8.721,7.7L25.1,24.615l-7.216-7.659L17.266,5.49Z"
          fill="#3d3d3d"
        />
      </svg>
      <span class="text-primary h5 p-0 m-0 pt-1 me-2">7 ث</span>
    </div>
  </div>
</div>
</div>`,
        `  <div class="video-item">
                <div class="img-wrap mb-3 position-relative">
                  <iframe
                    width="100%"
                    height="250"
                    src="https://www.youtube.com/embed/gPlmWGsR8rs"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div class="content px-3 pb-3">
                  <h5 class="w-100 text-center pb-3 d-block">كيكة التمر</h5>
                  <div
                    class="p-2 d-flex w-100 mt-4 align-items-center justify-content-between"
                  >
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        style="width: 20px; height: 20px"
                        width="34"
                        height="34"
                        viewBox="0 0 34 34"
                      >
                        <g id="svgexport-9" transform="translate(-10 -10)">
                          <path
                            id="Path_5709"
                            data-name="Path 5709"
                            d="M38.97,10h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H38.97a.692.692,0,0,1-.691-.691V10.691A.692.692,0,0,1,38.97,10ZM10.691,30.482H15.03a.692.692,0,0,1,.691.691V43.309A.692.692,0,0,1,15.03,44H10.691A.692.692,0,0,1,10,43.309V31.173A.692.692,0,0,1,10.691,30.482Zm9.426-6.827h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H20.117a.692.692,0,0,1-.691-.691V24.346A.692.692,0,0,1,20.117,23.655Zm9.426-6.827h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H29.544a.692.692,0,0,1-.691-.691V17.518a.692.692,0,0,1,.691-.691Z"
                            fill="#3d3d3d"
                            fill-rule="evenodd"
                          />
                        </g>
                      </svg>
                      <span class="text-primary h5 p-0 m-0 pt-1 me-2">سهلة</span>
                    </div>
                    <div class="d-flex align-items-center text-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        style="width: 20px; height: 20px"
                        width="34"
                        height="34"
                        viewBox="0 0 34 34"
                      >
                        <path
                          id="icons8_clock"
                          d="M17,0A17,17,0,1,0,34,17,17,17,0,0,0,17,0Zm0,2.833A14.167,14.167,0,1,1,2.833,17,14.166,14.166,0,0,1,17,2.833ZM15.495,5.49l-.62,11.6.133,1.24,8.721,7.7L25.1,24.615l-7.216-7.659L17.266,5.49Z"
                          fill="#3d3d3d"
                        />
                      </svg>
                      <span class="text-primary h5 p-0 m-0 pt-1 me-2">43 ث</span>
                    </div>
                  </div>
                </div>
              </div>`,
        `  <div class="video-item">
              <div class="img-wrap mb-3 position-relative">
                <iframe
                  width="100%"
                  height="250"
                  src="https://www.youtube.com/embed/gPlmWGsR8rs"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div class="content px-3 pb-3">
                <h5 class="w-100 text-center pb-3 d-block">كيكة التمر</h5>
                <div
                  class="p-2 d-flex w-100 mt-4 align-items-center justify-content-between"
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      style="width: 20px; height: 20px"
                      width="34"
                      height="34"
                      viewBox="0 0 34 34"
                    >
                      <g id="svgexport-9" transform="translate(-10 -10)">
                        <path
                          id="Path_5709"
                          data-name="Path 5709"
                          d="M38.97,10h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H38.97a.692.692,0,0,1-.691-.691V10.691A.692.692,0,0,1,38.97,10ZM10.691,30.482H15.03a.692.692,0,0,1,.691.691V43.309A.692.692,0,0,1,15.03,44H10.691A.692.692,0,0,1,10,43.309V31.173A.692.692,0,0,1,10.691,30.482Zm9.426-6.827h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H20.117a.692.692,0,0,1-.691-.691V24.346A.692.692,0,0,1,20.117,23.655Zm9.426-6.827h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H29.544a.692.692,0,0,1-.691-.691V17.518a.692.692,0,0,1,.691-.691Z"
                          fill="#3d3d3d"
                          fill-rule="evenodd"
                        />
                      </g>
                    </svg>
                    <span class="text-primary h5 p-0 m-0 pt-1 me-2">سهلة</span>
                  </div>
                  <div class="d-flex align-items-center text-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      style="width: 20px; height: 20px"
                      width="34"
                      height="34"
                      viewBox="0 0 34 34"
                    >
                      <path
                        id="icons8_clock"
                        d="M17,0A17,17,0,1,0,34,17,17,17,0,0,0,17,0Zm0,2.833A14.167,14.167,0,1,1,2.833,17,14.166,14.166,0,0,1,17,2.833ZM15.495,5.49l-.62,11.6.133,1.24,8.721,7.7L25.1,24.615l-7.216-7.659L17.266,5.49Z"
                        fill="#3d3d3d"
                      />
                    </svg>
                    <span class="text-primary h5 p-0 m-0 pt-1 me-2">43 ث</span>
                  </div>
                </div>
              </div>
            </div>`,
        `  <div class="video-item">
            <div class="img-wrap mb-3 position-relative">
              <iframe
                width="100%"
                height="250"
                src="https://www.youtube.com/embed/unCHiBgce_g"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div class="content px-3 pb-3">
              <h5 class="w-100 text-center pb-3 d-block">بسبوسة التمر</h5>
              <div
                class="p-2 d-flex w-100 mt-4 align-items-center justify-content-between"
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    style="width: 20px; height: 20px"
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                  >
                    <g id="svgexport-9" transform="translate(-10 -10)">
                      <path
                        id="Path_5709"
                        data-name="Path 5709"
                        d="M38.97,10h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H38.97a.692.692,0,0,1-.691-.691V10.691A.692.692,0,0,1,38.97,10ZM10.691,30.482H15.03a.692.692,0,0,1,.691.691V43.309A.692.692,0,0,1,15.03,44H10.691A.692.692,0,0,1,10,43.309V31.173A.692.692,0,0,1,10.691,30.482Zm9.426-6.827h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H20.117a.692.692,0,0,1-.691-.691V24.346A.692.692,0,0,1,20.117,23.655Zm9.426-6.827h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H29.544a.692.692,0,0,1-.691-.691V17.518a.692.692,0,0,1,.691-.691Z"
                        fill="#3d3d3d"
                        fill-rule="evenodd"
                      />
                    </g>
                  </svg>
                  <span class="text-primary h5 p-0 m-0 pt-1 me-2">سهلة</span>
                </div>
                <div class="d-flex align-items-center text-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    style="width: 20px; height: 20px"
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                  >
                    <path
                      id="icons8_clock"
                      d="M17,0A17,17,0,1,0,34,17,17,17,0,0,0,17,0Zm0,2.833A14.167,14.167,0,1,1,2.833,17,14.166,14.166,0,0,1,17,2.833ZM15.495,5.49l-.62,11.6.133,1.24,8.721,7.7L25.1,24.615l-7.216-7.659L17.266,5.49Z"
                      fill="#3d3d3d"
                    />
                  </svg>
                  <span class="text-primary h5 p-0 m-0 pt-1 me-2">43 ث</span>
                </div>
              </div>
            </div>
          </div>`,
        `  <div class="video-item">
          <div class="img-wrap mb-3 position-relative">
            <iframe
              width="100%"
              height="250"
              src="https://www.youtube.com/embed/FAfAXCaO8xE"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div class="content px-3 pb-3">
            <h5 class="w-100 text-center pb-3 d-block">
              كرات اللحم بالتمر
            </h5>
            <div
              class="p-2 d-flex w-100 mt-4 align-items-center justify-content-between"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  style="width: 20px; height: 20px"
                  width="34"
                  height="34"
                  viewBox="0 0 34 34"
                >
                  <g id="svgexport-9" transform="translate(-10 -10)">
                    <path
                      id="Path_5709"
                      data-name="Path 5709"
                      d="M38.97,10h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H38.97a.692.692,0,0,1-.691-.691V10.691A.692.692,0,0,1,38.97,10ZM10.691,30.482H15.03a.692.692,0,0,1,.691.691V43.309A.692.692,0,0,1,15.03,44H10.691A.692.692,0,0,1,10,43.309V31.173A.692.692,0,0,1,10.691,30.482Zm9.426-6.827h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H20.117a.692.692,0,0,1-.691-.691V24.346A.692.692,0,0,1,20.117,23.655Zm9.426-6.827h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H29.544a.692.692,0,0,1-.691-.691V17.518a.692.692,0,0,1,.691-.691Z"
                      fill="#3d3d3d"
                      fill-rule="evenodd"
                    />
                  </g>
                </svg>
                <span class="text-primary h5 p-0 m-0 pt-1 me-2">سهلة</span>
              </div>
              <div class="d-flex align-items-center text-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  style="width: 20px; height: 20px"
                  width="34"
                  height="34"
                  viewBox="0 0 34 34"
                >
                  <path
                    id="icons8_clock"
                    d="M17,0A17,17,0,1,0,34,17,17,17,0,0,0,17,0Zm0,2.833A14.167,14.167,0,1,1,2.833,17,14.166,14.166,0,0,1,17,2.833ZM15.495,5.49l-.62,11.6.133,1.24,8.721,7.7L25.1,24.615l-7.216-7.659L17.266,5.49Z"
                    fill="#3d3d3d"
                  />
                </svg>
                <span class="text-primary h5 p-0 m-0 pt-1 me-2">30 ث</span>
              </div>
            </div>
          </div>
        </div>`,
        `   <div class="video-item">
        <div class="img-wrap mb-3 position-relative">
          <iframe
            width="100%"
            height="250"
            src="https://www.youtube.com/embed/Mgt3dmrPneA"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div class="content px-3 pb-3">
          <h5 class="w-100 text-center pb-3 d-block">خبز بالتمر</h5>
          <div
            class="p-2 d-flex w-100 mt-4 align-items-center justify-content-between"
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style="width: 20px; height: 20px"
                width="34"
                height="34"
                viewBox="0 0 34 34"
              >
                <g id="svgexport-9" transform="translate(-10 -10)">
                  <path
                    id="Path_5709"
                    data-name="Path 5709"
                    d="M38.97,10h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H38.97a.692.692,0,0,1-.691-.691V10.691A.692.692,0,0,1,38.97,10ZM10.691,30.482H15.03a.692.692,0,0,1,.691.691V43.309A.692.692,0,0,1,15.03,44H10.691A.692.692,0,0,1,10,43.309V31.173A.692.692,0,0,1,10.691,30.482Zm9.426-6.827h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H20.117a.692.692,0,0,1-.691-.691V24.346A.692.692,0,0,1,20.117,23.655Zm9.426-6.827h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H29.544a.692.692,0,0,1-.691-.691V17.518a.692.692,0,0,1,.691-.691Z"
                    fill="#3d3d3d"
                    fill-rule="evenodd"
                  />
                </g>
              </svg>
              <span class="text-primary h5 p-0 m-0 pt-1 me-2">سهلة</span>
            </div>
            <div class="d-flex align-items-center text-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style="width: 20px; height: 20px"
                width="34"
                height="34"
                viewBox="0 0 34 34"
              >
                <path
                  id="icons8_clock"
                  d="M17,0A17,17,0,1,0,34,17,17,17,0,0,0,17,0Zm0,2.833A14.167,14.167,0,1,1,2.833,17,14.166,14.166,0,0,1,17,2.833ZM15.495,5.49l-.62,11.6.133,1.24,8.721,7.7L25.1,24.615l-7.216-7.659L17.266,5.49Z"
                  fill="#3d3d3d"
                />
              </svg>
              <span class="text-primary h5 p-0 m-0 pt-1 me-2">31 ث</span>
            </div>
          </div>
        </div>
      </div>`,
        ` <div class="video-item">
      <div class="img-wrap mb-3 position-relative">
        <iframe
          width="100%"
          height="250"
          src="https://www.youtube.com/embed/CInAPTSRoB4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div class="content px-3 pb-3">
        <h5 class="w-100 text-center pb-3 d-block">
          بيف برجر بصوص التمر الحار
        </h5>
        <div
          class="p-2 d-flex w-100 mt-4 align-items-center justify-content-between"
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style="width: 20px; height: 20px"
              width="34"
              height="34"
              viewBox="0 0 34 34"
            >
              <g id="svgexport-9" transform="translate(-10 -10)">
                <path
                  id="Path_5709"
                  data-name="Path 5709"
                  d="M38.97,10h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H38.97a.692.692,0,0,1-.691-.691V10.691A.692.692,0,0,1,38.97,10ZM10.691,30.482H15.03a.692.692,0,0,1,.691.691V43.309A.692.692,0,0,1,15.03,44H10.691A.692.692,0,0,1,10,43.309V31.173A.692.692,0,0,1,10.691,30.482Zm9.426-6.827h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H20.117a.692.692,0,0,1-.691-.691V24.346A.692.692,0,0,1,20.117,23.655Zm9.426-6.827h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H29.544a.692.692,0,0,1-.691-.691V17.518a.692.692,0,0,1,.691-.691Z"
                  fill="#3d3d3d"
                  fill-rule="evenodd"
                />
              </g>
            </svg>
            <span class="text-primary h5 p-0 m-0 pt-1 me-2">سهلة</span>
          </div>
          <div class="d-flex align-items-center text-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style="width: 20px; height: 20px"
              width="34"
              height="34"
              viewBox="0 0 34 34"
            >
              <path
                id="icons8_clock"
                d="M17,0A17,17,0,1,0,34,17,17,17,0,0,0,17,0Zm0,2.833A14.167,14.167,0,1,1,2.833,17,14.166,14.166,0,0,1,17,2.833ZM15.495,5.49l-.62,11.6.133,1.24,8.721,7.7L25.1,24.615l-7.216-7.659L17.266,5.49Z"
                fill="#3d3d3d"
              />
            </svg>
            <span class="text-primary h5 p-0 m-0 pt-1 me-2">49 ث</span>
          </div>
        </div>
      </div>
    </div>`,
        `   <div class="video-item">
    <div class="img-wrap mb-3 position-relative">
      <iframe
        width="100%"
        height="250"
        src="https://www.youtube.com/embed/L605E_C-gro"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <div class="content px-3 pb-3">
      <h5 class="w-100 text-center pb-3 d-block">
        أرز بالدبس والروبيان
      </h5>
      <div
        class="p-2 d-flex w-100 mt-4 align-items-center justify-content-between"
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style="width: 20px; height: 20px"
            width="34"
            height="34"
            viewBox="0 0 34 34"
          >
            <g id="svgexport-9" transform="translate(-10 -10)">
              <path
                id="Path_5709"
                data-name="Path 5709"
                d="M38.97,10h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H38.97a.692.692,0,0,1-.691-.691V10.691A.692.692,0,0,1,38.97,10ZM10.691,30.482H15.03a.692.692,0,0,1,.691.691V43.309A.692.692,0,0,1,15.03,44H10.691A.692.692,0,0,1,10,43.309V31.173A.692.692,0,0,1,10.691,30.482Zm9.426-6.827h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H20.117a.692.692,0,0,1-.691-.691V24.346A.692.692,0,0,1,20.117,23.655Zm9.426-6.827h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H29.544a.692.692,0,0,1-.691-.691V17.518a.692.692,0,0,1,.691-.691Z"
                fill="#3d3d3d"
                fill-rule="evenodd"
              />
            </g>
          </svg>
          <span class="text-primary h5 p-0 m-0 pt-1 me-2">سهلة</span>
        </div>
        <div class="d-flex align-items-center text-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style="width: 20px; height: 20px"
            width="34"
            height="34"
            viewBox="0 0 34 34"
          >
            <path
              id="icons8_clock"
              d="M17,0A17,17,0,1,0,34,17,17,17,0,0,0,17,0Zm0,2.833A14.167,14.167,0,1,1,2.833,17,14.166,14.166,0,0,1,17,2.833ZM15.495,5.49l-.62,11.6.133,1.24,8.721,7.7L25.1,24.615l-7.216-7.659L17.266,5.49Z"
              fill="#3d3d3d"
            />
          </svg>
          <span class="text-primary h5 p-0 m-0 pt-1 me-2">27 ث</span>
        </div>
      </div>
    </div>
  </div>`,
        `         <div class="video-item">
  <div class="img-wrap mb-3 position-relative">
    <iframe
      width="100%"
      height="250"
      src="https://www.youtube.com/embed/xMPXicylQyc"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
  <div class="content px-3 pb-3">
    <h5 class="w-100 text-center pb-3 d-block">ميلفيه التمر</h5>
    <div
      class="p-2 d-flex w-100 mt-4 align-items-center justify-content-between"
    >
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style="width: 20px; height: 20px"
          width="34"
          height="34"
          viewBox="0 0 34 34"
        >
          <g id="svgexport-9" transform="translate(-10 -10)">
            <path
              id="Path_5709"
              data-name="Path 5709"
              d="M38.97,10h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H38.97a.692.692,0,0,1-.691-.691V10.691A.692.692,0,0,1,38.97,10ZM10.691,30.482H15.03a.692.692,0,0,1,.691.691V43.309A.692.692,0,0,1,15.03,44H10.691A.692.692,0,0,1,10,43.309V31.173A.692.692,0,0,1,10.691,30.482Zm9.426-6.827h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H20.117a.692.692,0,0,1-.691-.691V24.346A.692.692,0,0,1,20.117,23.655Zm9.426-6.827h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H29.544a.692.692,0,0,1-.691-.691V17.518a.692.692,0,0,1,.691-.691Z"
              fill="#3d3d3d"
              fill-rule="evenodd"
            />
          </g>
        </svg>
        <span class="text-primary h5 p-0 m-0 pt-1 me-2">سهلة</span>
      </div>
      <div class="d-flex align-items-center text-start">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style="width: 20px; height: 20px"
          width="34"
          height="34"
          viewBox="0 0 34 34"
        >
          <path
            id="icons8_clock"
            d="M17,0A17,17,0,1,0,34,17,17,17,0,0,0,17,0Zm0,2.833A14.167,14.167,0,1,1,2.833,17,14.166,14.166,0,0,1,17,2.833ZM15.495,5.49l-.62,11.6.133,1.24,8.721,7.7L25.1,24.615l-7.216-7.659L17.266,5.49Z"
            fill="#3d3d3d"
          />
        </svg>
        <span class="text-primary h5 p-0 m-0 pt-1 me-2">22 ث</span>
      </div>
    </div>
  </div>
</div>`,
        `   <div class="video-item">
<div class="img-wrap mb-3 position-relative">
  <iframe
    width="100%"
    height="250"
    src="https://www.youtube.com/embed/HbM5QZPJ1GU"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</div>
<div class="content px-3 pb-3">
  <h5 class="w-100 text-center pb-3 d-block">
    مكعبات الفستق والتمر
  </h5>
  <div
    class="p-2 d-flex w-100 mt-4 align-items-center justify-content-between"
  >
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style="width: 20px; height: 20px"
        width="34"
        height="34"
        viewBox="0 0 34 34"
      >
        <g id="svgexport-9" transform="translate(-10 -10)">
          <path
            id="Path_5709"
            data-name="Path 5709"
            d="M38.97,10h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H38.97a.692.692,0,0,1-.691-.691V10.691A.692.692,0,0,1,38.97,10ZM10.691,30.482H15.03a.692.692,0,0,1,.691.691V43.309A.692.692,0,0,1,15.03,44H10.691A.692.692,0,0,1,10,43.309V31.173A.692.692,0,0,1,10.691,30.482Zm9.426-6.827h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H20.117a.692.692,0,0,1-.691-.691V24.346A.692.692,0,0,1,20.117,23.655Zm9.426-6.827h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H29.544a.692.692,0,0,1-.691-.691V17.518a.692.692,0,0,1,.691-.691Z"
            fill="#3d3d3d"
            fill-rule="evenodd"
          />
        </g>
      </svg>
      <span class="text-primary h5 p-0 m-0 pt-1 me-2">سهلة</span>
    </div>
    <div class="d-flex align-items-center text-start">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style="width: 20px; height: 20px"
        width="34"
        height="34"
        viewBox="0 0 34 34"
      >
        <path
          id="icons8_clock"
          d="M17,0A17,17,0,1,0,34,17,17,17,0,0,0,17,0Zm0,2.833A14.167,14.167,0,1,1,2.833,17,14.166,14.166,0,0,1,17,2.833ZM15.495,5.49l-.62,11.6.133,1.24,8.721,7.7L25.1,24.615l-7.216-7.659L17.266,5.49Z"
          fill="#3d3d3d"
        />
      </svg>
      <span class="text-primary h5 p-0 m-0 pt-1 me-2">49 ث</span>
    </div>
  </div>
</div>
</div>`,
        `  <div class="video-item">
<div class="img-wrap mb-3 position-relative">
  <iframe
    width="100%"
    height="250"
    src="https://www.youtube.com/embed/XxZPEUvumiw"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</div>
<div class="content px-3 pb-3">
  <h5 class="w-100 text-center pb-3 d-block">
    فيليه السمك بخلطة التمر
  </h5>
  <div
    class="p-2 d-flex w-100 mt-4 align-items-center justify-content-between"
  >
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style="width: 20px; height: 20px"
        width="34"
        height="34"
        viewBox="0 0 34 34"
      >
        <g id="svgexport-9" transform="translate(-10 -10)">
          <path
            id="Path_5709"
            data-name="Path 5709"
            d="M38.97,10h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H38.97a.692.692,0,0,1-.691-.691V10.691A.692.692,0,0,1,38.97,10ZM10.691,30.482H15.03a.692.692,0,0,1,.691.691V43.309A.692.692,0,0,1,15.03,44H10.691A.692.692,0,0,1,10,43.309V31.173A.692.692,0,0,1,10.691,30.482Zm9.426-6.827h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H20.117a.692.692,0,0,1-.691-.691V24.346A.692.692,0,0,1,20.117,23.655Zm9.426-6.827h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H29.544a.692.692,0,0,1-.691-.691V17.518a.692.692,0,0,1,.691-.691Z"
            fill="#3d3d3d"
            fill-rule="evenodd"
          />
        </g>
      </svg>
      <span class="text-primary h5 p-0 m-0 pt-1 me-2">سهلة</span>
    </div>
    <div class="d-flex align-items-center text-start">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style="width: 20px; height: 20px"
        width="34"
        height="34"
        viewBox="0 0 34 34"
      >
        <path
          id="icons8_clock"
          d="M17,0A17,17,0,1,0,34,17,17,17,0,0,0,17,0Zm0,2.833A14.167,14.167,0,1,1,2.833,17,14.166,14.166,0,0,1,17,2.833ZM15.495,5.49l-.62,11.6.133,1.24,8.721,7.7L25.1,24.615l-7.216-7.659L17.266,5.49Z"
          fill="#3d3d3d"
        />
      </svg>
      <span class="text-primary h5 p-0 m-0 pt-1 me-2">29 ث</span>
    </div>
  </div>
</div>
</div>`,
        `    <div class="video-item">
<div class="img-wrap mb-3 position-relative">
  <iframe
    width="100%"
    height="250"
    src="https://www.youtube.com/embed/BaVX788HpiE"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</div>
<div class="content px-3 pb-3">
  <h5 class="w-100 text-center pb-3 d-block">
    صدور الدجاج بالتمر والزيتون
  </h5>
  <div
    class="p-2 d-flex w-100 mt-4 align-items-center justify-content-between"
  >
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style="width: 20px; height: 20px"
        width="34"
        height="34"
        viewBox="0 0 34 34"
      >
        <g id="svgexport-9" transform="translate(-10 -10)">
          <path
            id="Path_5709"
            data-name="Path 5709"
            d="M38.97,10h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H38.97a.692.692,0,0,1-.691-.691V10.691A.692.692,0,0,1,38.97,10ZM10.691,30.482H15.03a.692.692,0,0,1,.691.691V43.309A.692.692,0,0,1,15.03,44H10.691A.692.692,0,0,1,10,43.309V31.173A.692.692,0,0,1,10.691,30.482Zm9.426-6.827h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H20.117a.692.692,0,0,1-.691-.691V24.346A.692.692,0,0,1,20.117,23.655Zm9.426-6.827h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H29.544a.692.692,0,0,1-.691-.691V17.518a.692.692,0,0,1,.691-.691Z"
            fill="#3d3d3d"
            fill-rule="evenodd"
          />
        </g>
      </svg>
      <span class="text-primary h5 p-0 m-0 pt-1 me-2">سهلة</span>
    </div>
    <div class="d-flex align-items-center text-start">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style="width: 20px; height: 20px"
        width="34"
        height="34"
        viewBox="0 0 34 34"
      >
        <path
          id="icons8_clock"
          d="M17,0A17,17,0,1,0,34,17,17,17,0,0,0,17,0Zm0,2.833A14.167,14.167,0,1,1,2.833,17,14.166,14.166,0,0,1,17,2.833ZM15.495,5.49l-.62,11.6.133,1.24,8.721,7.7L25.1,24.615l-7.216-7.659L17.266,5.49Z"
          fill="#3d3d3d"
        />
      </svg>
      <span class="text-primary h5 p-0 m-0 pt-1 me-2">45 ث</span>
    </div>
  </div>
</div>
</div>`,
        `  <div class="video-item">
<div class="img-wrap mb-3 position-relative">
  <iframe
    width="100%"
    height="250"
    src="https://www.youtube.com/embed/-6P2kc5HSTg"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</div>
<div class="content px-3 pb-3">
  <h5 class="w-100 text-center pb-3 d-block">دونات بالتمر</h5>
  <div
    class="p-2 d-flex w-100 mt-4 align-items-center justify-content-between"
  >
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style="width: 20px; height: 20px"
        width="34"
        height="34"
        viewBox="0 0 34 34"
      >
        <g id="svgexport-9" transform="translate(-10 -10)">
          <path
            id="Path_5709"
            data-name="Path 5709"
            d="M38.97,10h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H38.97a.692.692,0,0,1-.691-.691V10.691A.692.692,0,0,1,38.97,10ZM10.691,30.482H15.03a.692.692,0,0,1,.691.691V43.309A.692.692,0,0,1,15.03,44H10.691A.692.692,0,0,1,10,43.309V31.173A.692.692,0,0,1,10.691,30.482Zm9.426-6.827h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H20.117a.692.692,0,0,1-.691-.691V24.346A.692.692,0,0,1,20.117,23.655Zm9.426-6.827h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H29.544a.692.692,0,0,1-.691-.691V17.518a.692.692,0,0,1,.691-.691Z"
            fill="#3d3d3d"
            fill-rule="evenodd"
          />
        </g>
      </svg>
      <span class="text-primary h5 p-0 m-0 pt-1 me-2">سهلة</span>
    </div>
    <div class="d-flex align-items-center text-start">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style="width: 20px; height: 20px"
        width="34"
        height="34"
        viewBox="0 0 34 34"
      >
        <path
          id="icons8_clock"
          d="M17,0A17,17,0,1,0,34,17,17,17,0,0,0,17,0Zm0,2.833A14.167,14.167,0,1,1,2.833,17,14.166,14.166,0,0,1,17,2.833ZM15.495,5.49l-.62,11.6.133,1.24,8.721,7.7L25.1,24.615l-7.216-7.659L17.266,5.49Z"
          fill="#3d3d3d"
        />
      </svg>
      <span class="text-primary h5 p-0 m-0 pt-1 me-2">34 ث</span>
    </div>
  </div>
</div>
</div>`,
        `  <div class="video-item">
<div class="img-wrap mb-3 position-relative">
  <iframe
    width="100%"
    height="250"
    src="https://www.youtube.com/embed/GvkugC3UpcM"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</div>
<div class="content px-3 pb-3">
  <h5 class="w-100 text-center pb-3 d-block">تشيز كيك التمر</h5>
  <div
    class="p-2 d-flex w-100 mt-4 align-items-center justify-content-between"
  >
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style="width: 20px; height: 20px"
        width="34"
        height="34"
        viewBox="0 0 34 34"
      >
        <g id="svgexport-9" transform="translate(-10 -10)">
          <path
            id="Path_5709"
            data-name="Path 5709"
            d="M38.97,10h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H38.97a.692.692,0,0,1-.691-.691V10.691A.692.692,0,0,1,38.97,10ZM10.691,30.482H15.03a.692.692,0,0,1,.691.691V43.309A.692.692,0,0,1,15.03,44H10.691A.692.692,0,0,1,10,43.309V31.173A.692.692,0,0,1,10.691,30.482Zm9.426-6.827h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H20.117a.692.692,0,0,1-.691-.691V24.346A.692.692,0,0,1,20.117,23.655Zm9.426-6.827h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H29.544a.692.692,0,0,1-.691-.691V17.518a.692.692,0,0,1,.691-.691Z"
            fill="#3d3d3d"
            fill-rule="evenodd"
          />
        </g>
      </svg>
      <span class="text-primary h5 p-0 m-0 pt-1 me-2">سهلة</span>
    </div>
    <div class="d-flex align-items-center text-start">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style="width: 20px; height: 20px"
        width="34"
        height="34"
        viewBox="0 0 34 34"
      >
        <path
          id="icons8_clock"
          d="M17,0A17,17,0,1,0,34,17,17,17,0,0,0,17,0Zm0,2.833A14.167,14.167,0,1,1,2.833,17,14.166,14.166,0,0,1,17,2.833ZM15.495,5.49l-.62,11.6.133,1.24,8.721,7.7L25.1,24.615l-7.216-7.659L17.266,5.49Z"
          fill="#3d3d3d"
        />
      </svg>
      <span class="text-primary h5 p-0 m-0 pt-1 me-2">40 ث</span>
    </div>
  </div>
</div>
</div>`,
        `    <div class="video-item">
<div class="img-wrap mb-3 position-relative">
  <iframe
    width="100%"
    height="250"
    src="https://www.youtube.com/embed/_mNS1hns5KI"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</div>
<div class="content px-3 pb-3">
  <h5 class="w-100 text-center pb-3 d-block">
    بيسكوتي مع قطع التمر واللوز
  </h5>
  <div
    class="p-2 d-flex w-100 mt-4 align-items-center justify-content-between"
  >
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style="width: 20px; height: 20px"
        width="34"
        height="34"
        viewBox="0 0 34 34"
      >
        <g id="svgexport-9" transform="translate(-10 -10)">
          <path
            id="Path_5709"
            data-name="Path 5709"
            d="M38.97,10h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H38.97a.692.692,0,0,1-.691-.691V10.691A.692.692,0,0,1,38.97,10ZM10.691,30.482H15.03a.692.692,0,0,1,.691.691V43.309A.692.692,0,0,1,15.03,44H10.691A.692.692,0,0,1,10,43.309V31.173A.692.692,0,0,1,10.691,30.482Zm9.426-6.827h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H20.117a.692.692,0,0,1-.691-.691V24.346A.692.692,0,0,1,20.117,23.655Zm9.426-6.827h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H29.544a.692.692,0,0,1-.691-.691V17.518a.692.692,0,0,1,.691-.691Z"
            fill="#3d3d3d"
            fill-rule="evenodd"
          />
        </g>
      </svg>
      <span class="text-primary h5 p-0 m-0 pt-1 me-2">سهلة</span>
    </div>
    <div class="d-flex align-items-center text-start">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style="width: 20px; height: 20px"
        width="34"
        height="34"
        viewBox="0 0 34 34"
      >
        <path
          id="icons8_clock"
          d="M17,0A17,17,0,1,0,34,17,17,17,0,0,0,17,0Zm0,2.833A14.167,14.167,0,1,1,2.833,17,14.166,14.166,0,0,1,17,2.833ZM15.495,5.49l-.62,11.6.133,1.24,8.721,7.7L25.1,24.615l-7.216-7.659L17.266,5.49Z"
          fill="#3d3d3d"
        />
      </svg>
      <span class="text-primary h5 p-0 m-0 pt-1 me-2">35 ث</span>
    </div>
  </div>
</div>
</div>`,
        `      <div class="video-item">
<div class="img-wrap mb-3 position-relative">
  <iframe
    width="100%"
    height="250"
    src="https://www.youtube.com/embed/0f4OBzbE74o"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</div>
<div class="content px-3 pb-3">
  <h5 class="w-100 text-center pb-3 d-block">بقلاوة التمر</h5>
  <div
    class="p-2 d-flex w-100 mt-4 align-items-center justify-content-between"
  >
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style="width: 20px; height: 20px"
        width="34"
        height="34"
        viewBox="0 0 34 34"
      >
        <g id="svgexport-9" transform="translate(-10 -10)">
          <path
            id="Path_5709"
            data-name="Path 5709"
            d="M38.97,10h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H38.97a.692.692,0,0,1-.691-.691V10.691A.692.692,0,0,1,38.97,10ZM10.691,30.482H15.03a.692.692,0,0,1,.691.691V43.309A.692.692,0,0,1,15.03,44H10.691A.692.692,0,0,1,10,43.309V31.173A.692.692,0,0,1,10.691,30.482Zm9.426-6.827h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H20.117a.692.692,0,0,1-.691-.691V24.346A.692.692,0,0,1,20.117,23.655Zm9.426-6.827h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H29.544a.692.692,0,0,1-.691-.691V17.518a.692.692,0,0,1,.691-.691Z"
            fill="#3d3d3d"
            fill-rule="evenodd"
          />
        </g>
      </svg>
      <span class="text-primary h5 p-0 m-0 pt-1 me-2">سهلة</span>
    </div>
    <div class="d-flex align-items-center text-start">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style="width: 20px; height: 20px"
        width="34"
        height="34"
        viewBox="0 0 34 34"
      >
        <path
          id="icons8_clock"
          d="M17,0A17,17,0,1,0,34,17,17,17,0,0,0,17,0Zm0,2.833A14.167,14.167,0,1,1,2.833,17,14.166,14.166,0,0,1,17,2.833ZM15.495,5.49l-.62,11.6.133,1.24,8.721,7.7L25.1,24.615l-7.216-7.659L17.266,5.49Z"
          fill="#3d3d3d"
        />
      </svg>
      <span class="text-primary h5 p-0 m-0 pt-1 me-2">44 ث</span>
    </div>
  </div>
</div>
</div>`,
        `   <div class="video-item">
<div class="img-wrap mb-3 position-relative">
  <iframe
    width="100%"
    height="250"
    src="https://www.youtube.com/embed/yyaI0slaOK8"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</div>
<div class="content px-3 pb-3">
  <h5 class="w-100 text-center pb-3 d-block">
    بف باستري بالتمر والجبن
  </h5>
  <div
    class="p-2 d-flex w-100 mt-4 align-items-center justify-content-between"
  >
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style="width: 20px; height: 20px"
        width="34"
        height="34"
        viewBox="0 0 34 34"
      >
        <g id="svgexport-9" transform="translate(-10 -10)">
          <path
            id="Path_5709"
            data-name="Path 5709"
            d="M38.97,10h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H38.97a.692.692,0,0,1-.691-.691V10.691A.692.692,0,0,1,38.97,10ZM10.691,30.482H15.03a.692.692,0,0,1,.691.691V43.309A.692.692,0,0,1,15.03,44H10.691A.692.692,0,0,1,10,43.309V31.173A.692.692,0,0,1,10.691,30.482Zm9.426-6.827h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H20.117a.692.692,0,0,1-.691-.691V24.346A.692.692,0,0,1,20.117,23.655Zm9.426-6.827h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H29.544a.692.692,0,0,1-.691-.691V17.518a.692.692,0,0,1,.691-.691Z"
            fill="#3d3d3d"
            fill-rule="evenodd"
          />
        </g>
      </svg>
      <span class="text-primary h5 p-0 m-0 pt-1 me-2">سهلة</span>
    </div>
    <div class="d-flex align-items-center text-start">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style="width: 20px; height: 20px"
        width="34"
        height="34"
        viewBox="0 0 34 34"
      >
        <path
          id="icons8_clock"
          d="M17,0A17,17,0,1,0,34,17,17,17,0,0,0,17,0Zm0,2.833A14.167,14.167,0,1,1,2.833,17,14.166,14.166,0,0,1,17,2.833ZM15.495,5.49l-.62,11.6.133,1.24,8.721,7.7L25.1,24.615l-7.216-7.659L17.266,5.49Z"
          fill="#3d3d3d"
        />
      </svg>
      <span class="text-primary h5 p-0 m-0 pt-1 me-2">19 ث</span>
    </div>
  </div>
</div>
</div>`,
        `   <div class="video-item">
<div class="img-wrap mb-3 position-relative">
  <iframe
    width="100%"
    height="250"
    src="https://www.youtube.com/embed/usU0h-5_DIM"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</div>
<div class="content px-3 pb-3">
  <h5 class="w-100 text-center pb-3 d-block">بان كيك بالتمر</h5>
  <div
    class="p-2 d-flex w-100 mt-4 align-items-center justify-content-between"
  >
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style="width: 20px; height: 20px"
        width="34"
        height="34"
        viewBox="0 0 34 34"
      >
        <g id="svgexport-9" transform="translate(-10 -10)">
          <path
            id="Path_5709"
            data-name="Path 5709"
            d="M38.97,10h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H38.97a.692.692,0,0,1-.691-.691V10.691A.692.692,0,0,1,38.97,10ZM10.691,30.482H15.03a.692.692,0,0,1,.691.691V43.309A.692.692,0,0,1,15.03,44H10.691A.692.692,0,0,1,10,43.309V31.173A.692.692,0,0,1,10.691,30.482Zm9.426-6.827h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H20.117a.692.692,0,0,1-.691-.691V24.346A.692.692,0,0,1,20.117,23.655Zm9.426-6.827h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H29.544a.692.692,0,0,1-.691-.691V17.518a.692.692,0,0,1,.691-.691Z"
            fill="#3d3d3d"
            fill-rule="evenodd"
          />
        </g>
      </svg>
      <span class="text-primary h5 p-0 m-0 pt-1 me-2">سهلة</span>
    </div>
    <div class="d-flex align-items-center text-start">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style="width: 20px; height: 20px"
        width="34"
        height="34"
        viewBox="0 0 34 34"
      >
        <path
          id="icons8_clock"
          d="M17,0A17,17,0,1,0,34,17,17,17,0,0,0,17,0Zm0,2.833A14.167,14.167,0,1,1,2.833,17,14.166,14.166,0,0,1,17,2.833ZM15.495,5.49l-.62,11.6.133,1.24,8.721,7.7L25.1,24.615l-7.216-7.659L17.266,5.49Z"
          fill="#3d3d3d"
        />
      </svg>
      <span class="text-primary h5 p-0 m-0 pt-1 me-2">43 ث</span>
    </div>
  </div>
</div>
</div>`,
        `      <div class="video-item">
<div class="img-wrap mb-3 position-relative">
  <iframe
    width="100%"
    height="250"
    src="https://www.youtube.com/embed/fLrzHUzgZwg"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</div>
<div class="content px-3 pb-3">
  <h5 class="w-100 text-center pb-3 d-block">
    خلية النحل بالتمر
  </h5>
  <div
    class="p-2 d-flex w-100 mt-4 align-items-center justify-content-between"
  >
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style="width: 20px; height: 20px"
        width="34"
        height="34"
        viewBox="0 0 34 34"
      >
        <g id="svgexport-9" transform="translate(-10 -10)">
          <path
            id="Path_5709"
            data-name="Path 5709"
            d="M38.97,10h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H38.97a.692.692,0,0,1-.691-.691V10.691A.692.692,0,0,1,38.97,10ZM10.691,30.482H15.03a.692.692,0,0,1,.691.691V43.309A.692.692,0,0,1,15.03,44H10.691A.692.692,0,0,1,10,43.309V31.173A.692.692,0,0,1,10.691,30.482Zm9.426-6.827h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H20.117a.692.692,0,0,1-.691-.691V24.346A.692.692,0,0,1,20.117,23.655Zm9.426-6.827h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H29.544a.692.692,0,0,1-.691-.691V17.518a.692.692,0,0,1,.691-.691Z"
            fill="#3d3d3d"
            fill-rule="evenodd"
          />
        </g>
      </svg>
      <span class="text-primary h5 p-0 m-0 pt-1 me-2">سهلة</span>
    </div>
    <div class="d-flex align-items-center text-start">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style="width: 20px; height: 20px"
        width="34"
        height="34"
        viewBox="0 0 34 34"
      >
        <path
          id="icons8_clock"
          d="M17,0A17,17,0,1,0,34,17,17,17,0,0,0,17,0Zm0,2.833A14.167,14.167,0,1,1,2.833,17,14.166,14.166,0,0,1,17,2.833ZM15.495,5.49l-.62,11.6.133,1.24,8.721,7.7L25.1,24.615l-7.216-7.659L17.266,5.49Z"
          fill="#3d3d3d"
        />
      </svg>
      <span class="text-primary h5 p-0 m-0 pt-1 me-2">41 ث</span>
    </div>
  </div>
</div>
</div>`,
        `  <div class="video-item">
<div class="img-wrap mb-3 position-relative">
  <iframe
    width="100%"
    height="250"
    src="https://www.youtube.com/embed/JrPPz0yAWRo"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</div>
<div class="content px-3 pb-3">
  <h5 class="w-100 text-center pb-3 d-block">بار بالتمر</h5>
  <div
    class="p-2 d-flex w-100 mt-4 align-items-center justify-content-between"
  >
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style="width: 20px; height: 20px"
        width="34"
        height="34"
        viewBox="0 0 34 34"
      >
        <g id="svgexport-9" transform="translate(-10 -10)">
          <path
            id="Path_5709"
            data-name="Path 5709"
            d="M38.97,10h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H38.97a.692.692,0,0,1-.691-.691V10.691A.692.692,0,0,1,38.97,10ZM10.691,30.482H15.03a.692.692,0,0,1,.691.691V43.309A.692.692,0,0,1,15.03,44H10.691A.692.692,0,0,1,10,43.309V31.173A.692.692,0,0,1,10.691,30.482Zm9.426-6.827h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H20.117a.692.692,0,0,1-.691-.691V24.346A.692.692,0,0,1,20.117,23.655Zm9.426-6.827h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H29.544a.692.692,0,0,1-.691-.691V17.518a.692.692,0,0,1,.691-.691Z"
            fill="#3d3d3d"
            fill-rule="evenodd"
          />
        </g>
      </svg>
      <span class="text-primary h5 p-0 m-0 pt-1 me-2">سهلة</span>
    </div>
    <div class="d-flex align-items-center text-start">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style="width: 20px; height: 20px"
        width="34"
        height="34"
        viewBox="0 0 34 34"
      >
        <path
          id="icons8_clock"
          d="M17,0A17,17,0,1,0,34,17,17,17,0,0,0,17,0Zm0,2.833A14.167,14.167,0,1,1,2.833,17,14.166,14.166,0,0,1,17,2.833ZM15.495,5.49l-.62,11.6.133,1.24,8.721,7.7L25.1,24.615l-7.216-7.659L17.266,5.49Z"
          fill="#3d3d3d"
        />
      </svg>
      <span class="text-primary h5 p-0 m-0 pt-1 me-2">19 ث</span>
    </div>
  </div>
</div>
</div>`,
        ` <div class="video-item">
<div class="img-wrap mb-3 position-relative">
  <iframe
    width="100%"
    height="250"
    src="https://www.youtube.com/embed/lfypQRlg1n0"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</div>
<div class="content px-3 pb-3">
  <h5 class="w-100 text-center pb-3 d-block">
    فلات بريد مع التمر
  </h5>
  <div
    class="p-2 d-flex w-100 mt-4 align-items-center justify-content-between"
  >
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style="width: 20px; height: 20px"
        width="34"
        height="34"
        viewBox="0 0 34 34"
      >
        <g id="svgexport-9" transform="translate(-10 -10)">
          <path
            id="Path_5709"
            data-name="Path 5709"
            d="M38.97,10h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H38.97a.692.692,0,0,1-.691-.691V10.691A.692.692,0,0,1,38.97,10ZM10.691,30.482H15.03a.692.692,0,0,1,.691.691V43.309A.692.692,0,0,1,15.03,44H10.691A.692.692,0,0,1,10,43.309V31.173A.692.692,0,0,1,10.691,30.482Zm9.426-6.827h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H20.117a.692.692,0,0,1-.691-.691V24.346A.692.692,0,0,1,20.117,23.655Zm9.426-6.827h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H29.544a.692.692,0,0,1-.691-.691V17.518a.692.692,0,0,1,.691-.691Z"
            fill="#3d3d3d"
            fill-rule="evenodd"
          />
        </g>
      </svg>
      <span class="text-primary h5 p-0 m-0 pt-1 me-2">سهلة</span>
    </div>
    <div class="d-flex align-items-center text-start">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style="width: 20px; height: 20px"
        width="34"
        height="34"
        viewBox="0 0 34 34"
      >
        <path
          id="icons8_clock"
          d="M17,0A17,17,0,1,0,34,17,17,17,0,0,0,17,0Zm0,2.833A14.167,14.167,0,1,1,2.833,17,14.166,14.166,0,0,1,17,2.833ZM15.495,5.49l-.62,11.6.133,1.24,8.721,7.7L25.1,24.615l-7.216-7.659L17.266,5.49Z"
          fill="#3d3d3d"
        />
      </svg>
      <span class="text-primary h5 p-0 m-0 pt-1 me-2">20 ث</span>
    </div>
  </div>
</div>
</div>`,
        ` <div class="video-item">
<div class="img-wrap mb-3 position-relative">
  <iframe
    width="100%"
    height="250"
    src="https://www.youtube.com/embed/19srpfLbcxk"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</div>
<div class="content px-3 pb-3">
  <h5 class="w-100 text-center pb-3 d-block">
    بروشيتا الجبن والتمر
  </h5>
  <div
    class="p-2 d-flex w-100 mt-4 align-items-center justify-content-between"
  >
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style="width: 20px; height: 20px"
        width="34"
        height="34"
        viewBox="0 0 34 34"
      >
        <g id="svgexport-9" transform="translate(-10 -10)">
          <path
            id="Path_5709"
            data-name="Path 5709"
            d="M38.97,10h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H38.97a.692.692,0,0,1-.691-.691V10.691A.692.692,0,0,1,38.97,10ZM10.691,30.482H15.03a.692.692,0,0,1,.691.691V43.309A.692.692,0,0,1,15.03,44H10.691A.692.692,0,0,1,10,43.309V31.173A.692.692,0,0,1,10.691,30.482Zm9.426-6.827h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H20.117a.692.692,0,0,1-.691-.691V24.346A.692.692,0,0,1,20.117,23.655Zm9.426-6.827h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H29.544a.692.692,0,0,1-.691-.691V17.518a.692.692,0,0,1,.691-.691Z"
            fill="#3d3d3d"
            fill-rule="evenodd"
          />
        </g>
      </svg>
      <span class="text-primary h5 p-0 m-0 pt-1 me-2">سهلة</span>
    </div>
    <div class="d-flex align-items-center text-start">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style="width: 20px; height: 20px"
        width="34"
        height="34"
        viewBox="0 0 34 34"
      >
        <path
          id="icons8_clock"
          d="M17,0A17,17,0,1,0,34,17,17,17,0,0,0,17,0Zm0,2.833A14.167,14.167,0,1,1,2.833,17,14.166,14.166,0,0,1,17,2.833ZM15.495,5.49l-.62,11.6.133,1.24,8.721,7.7L25.1,24.615l-7.216-7.659L17.266,5.49Z"
          fill="#3d3d3d"
        />
      </svg>
      <span class="text-primary h5 p-0 m-0 pt-1 me-2">16 ث</span>
    </div>
  </div>
</div>
</div>`,
        `      <div class="video-item">
<div class="img-wrap mb-3 position-relative">
  <iframe
    width="100%"
    height="250"
    src="https://www.youtube.com/embed/tuAjyM0tyec"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</div>
<div class="content px-3 pb-3">
  <h5 class="w-100 text-center pb-3 d-block">بيستو بالتمر</h5>
  <div
    class="p-2 d-flex w-100 mt-4 align-items-center justify-content-between"
  >
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style="width: 20px; height: 20px"
        width="34"
        height="34"
        viewBox="0 0 34 34"
      >
        <g id="svgexport-9" transform="translate(-10 -10)">
          <path
            id="Path_5709"
            data-name="Path 5709"
            d="M38.97,10h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H38.97a.692.692,0,0,1-.691-.691V10.691A.692.692,0,0,1,38.97,10ZM10.691,30.482H15.03a.692.692,0,0,1,.691.691V43.309A.692.692,0,0,1,15.03,44H10.691A.692.692,0,0,1,10,43.309V31.173A.692.692,0,0,1,10.691,30.482Zm9.426-6.827h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H20.117a.692.692,0,0,1-.691-.691V24.346A.692.692,0,0,1,20.117,23.655Zm9.426-6.827h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H29.544a.692.692,0,0,1-.691-.691V17.518a.692.692,0,0,1,.691-.691Z"
            fill="#3d3d3d"
            fill-rule="evenodd"
          />
        </g>
      </svg>
      <span class="text-primary h5 p-0 m-0 pt-1 me-2">سهلة</span>
    </div>
    <div class="d-flex align-items-center text-start">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style="width: 20px; height: 20px"
        width="34"
        height="34"
        viewBox="0 0 34 34"
      >
        <path
          id="icons8_clock"
          d="M17,0A17,17,0,1,0,34,17,17,17,0,0,0,17,0Zm0,2.833A14.167,14.167,0,1,1,2.833,17,14.166,14.166,0,0,1,17,2.833ZM15.495,5.49l-.62,11.6.133,1.24,8.721,7.7L25.1,24.615l-7.216-7.659L17.266,5.49Z"
          fill="#3d3d3d"
        />
      </svg>
      <span class="text-primary h5 p-0 m-0 pt-1 me-2">24 ث</span>
    </div>
  </div>
</div>
</div>`,
        `  <div class="video-item">
<div class="img-wrap mb-3 position-relative">
  <iframe
    width="100%"
    height="250"
    src="https://www.youtube.com/embed/xLzkaqO0TOk"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</div>
<div class="content px-3 pb-3">
  <h5 class="w-100 text-center pb-3 d-block">تارت بالتمر</h5>
  <div
    class="p-2 d-flex w-100 mt-4 align-items-center justify-content-between"
  >
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style="width: 20px; height: 20px"
        width="34"
        height="34"
        viewBox="0 0 34 34"
      >
        <g id="svgexport-9" transform="translate(-10 -10)">
          <path
            id="Path_5709"
            data-name="Path 5709"
            d="M38.97,10h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H38.97a.692.692,0,0,1-.691-.691V10.691A.692.692,0,0,1,38.97,10ZM10.691,30.482H15.03a.692.692,0,0,1,.691.691V43.309A.692.692,0,0,1,15.03,44H10.691A.692.692,0,0,1,10,43.309V31.173A.692.692,0,0,1,10.691,30.482Zm9.426-6.827h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H20.117a.692.692,0,0,1-.691-.691V24.346A.692.692,0,0,1,20.117,23.655Zm9.426-6.827h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H29.544a.692.692,0,0,1-.691-.691V17.518a.692.692,0,0,1,.691-.691Z"
            fill="#3d3d3d"
            fill-rule="evenodd"
          />
        </g>
      </svg>
      <span class="text-primary h5 p-0 m-0 pt-1 me-2">سهلة</span>
    </div>
    <div class="d-flex align-items-center text-start">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style="width: 20px; height: 20px"
        width="34"
        height="34"
        viewBox="0 0 34 34"
      >
        <path
          id="icons8_clock"
          d="M17,0A17,17,0,1,0,34,17,17,17,0,0,0,17,0Zm0,2.833A14.167,14.167,0,1,1,2.833,17,14.166,14.166,0,0,1,17,2.833ZM15.495,5.49l-.62,11.6.133,1.24,8.721,7.7L25.1,24.615l-7.216-7.659L17.266,5.49Z"
          fill="#3d3d3d"
        />
      </svg>
      <span class="text-primary h5 p-0 m-0 pt-1 me-2">13 ث</span>
    </div>
  </div>
</div>
</div>`,
        ` <div class="video-item">
<div class="img-wrap mb-3 position-relative">
  <iframe
    width="100%"
    height="250"
    src="https://www.youtube.com/embed/pKEUi_aIxeU"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</div>
<div class="content px-3 pb-3">
  <h5 class="w-100 text-center pb-3 d-block">
    تغميسة اللبنة بالتمر
  </h5>
  <div
    class="p-2 d-flex w-100 mt-4 align-items-center justify-content-between"
  >
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style="width: 20px; height: 20px"
        width="34"
        height="34"
        viewBox="0 0 34 34"
      >
        <g id="svgexport-9" transform="translate(-10 -10)">
          <path
            id="Path_5709"
            data-name="Path 5709"
            d="M38.97,10h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H38.97a.692.692,0,0,1-.691-.691V10.691A.692.692,0,0,1,38.97,10ZM10.691,30.482H15.03a.692.692,0,0,1,.691.691V43.309A.692.692,0,0,1,15.03,44H10.691A.692.692,0,0,1,10,43.309V31.173A.692.692,0,0,1,10.691,30.482Zm9.426-6.827h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H20.117a.692.692,0,0,1-.691-.691V24.346A.692.692,0,0,1,20.117,23.655Zm9.426-6.827h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H29.544a.692.692,0,0,1-.691-.691V17.518a.692.692,0,0,1,.691-.691Z"
            fill="#3d3d3d"
            fill-rule="evenodd"
          />
        </g>
      </svg>
      <span class="text-primary h5 p-0 m-0 pt-1 me-2">سهلة</span>
    </div>
    <div class="d-flex align-items-center text-start">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style="width: 20px; height: 20px"
        width="34"
        height="34"
        viewBox="0 0 34 34"
      >
        <path
          id="icons8_clock"
          d="M17,0A17,17,0,1,0,34,17,17,17,0,0,0,17,0Zm0,2.833A14.167,14.167,0,1,1,2.833,17,14.166,14.166,0,0,1,17,2.833ZM15.495,5.49l-.62,11.6.133,1.24,8.721,7.7L25.1,24.615l-7.216-7.659L17.266,5.49Z"
          fill="#3d3d3d"
        />
      </svg>
      <span class="text-primary h5 p-0 m-0 pt-1 me-2">26 ث</span>
    </div>
  </div>
</div>
</div>`,
        `      <div class="video-item">
<div class="img-wrap mb-3 position-relative">
  <iframe
    width="100%"
    height="250"
    src="https://www.youtube.com/embed/OET8lgXT8fM"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</div>
<div class="content px-3 pb-3">
  <h5 class="w-100 text-center pb-3 d-block">تمر محشي بالقشطة</h5>
  <div
    class="p-2 d-flex w-100 mt-4 align-items-center justify-content-between"
  >
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style="width: 20px; height: 20px"
        width="34"
        height="34"
        viewBox="0 0 34 34"
      >
        <g id="svgexport-9" transform="translate(-10 -10)">
          <path
            id="Path_5709"
            data-name="Path 5709"
            d="M38.97,10h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H38.97a.692.692,0,0,1-.691-.691V10.691A.692.692,0,0,1,38.97,10ZM10.691,30.482H15.03a.692.692,0,0,1,.691.691V43.309A.692.692,0,0,1,15.03,44H10.691A.692.692,0,0,1,10,43.309V31.173A.692.692,0,0,1,10.691,30.482Zm9.426-6.827h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H20.117a.692.692,0,0,1-.691-.691V24.346A.692.692,0,0,1,20.117,23.655Zm9.426-6.827h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H29.544a.692.692,0,0,1-.691-.691V17.518a.692.692,0,0,1,.691-.691Z"
            fill="#3d3d3d"
            fill-rule="evenodd"
          />
        </g>
      </svg>
      <span class="text-primary h5 p-0 m-0 pt-1 me-2">سهلة</span>
    </div>
    <div class="d-flex align-items-center text-start">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style="width: 20px; height: 20px"
        width="34"
        height="34"
        viewBox="0 0 34 34"
      >
        <path
          id="icons8_clock"
          d="M17,0A17,17,0,1,0,34,17,17,17,0,0,0,17,0Zm0,2.833A14.167,14.167,0,1,1,2.833,17,14.166,14.166,0,0,1,17,2.833ZM15.495,5.49l-.62,11.6.133,1.24,8.721,7.7L25.1,24.615l-7.216-7.659L17.266,5.49Z"
          fill="#3d3d3d"
        />
      </svg>
      <span class="text-primary h5 p-0 m-0 pt-1 me-2">21 ث</span>
    </div>
  </div>
</div>
</div>`,
        `   <div class="video-item">
<div class="img-wrap mb-3 position-relative">
  <iframe
    width="100%"
    height="250"
    src="https://www.youtube.com/embed/ia6haqEQJSo"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</div>
<div class="content px-3 pb-3">
  <h5 class="w-100 text-center pb-3 d-block">سموثي البسر</h5>
  <div
    class="p-2 d-flex w-100 mt-4 align-items-center justify-content-between"
  >
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style="width: 20px; height: 20px"
        width="34"
        height="34"
        viewBox="0 0 34 34"
      >
        <g id="svgexport-9" transform="translate(-10 -10)">
          <path
            id="Path_5709"
            data-name="Path 5709"
            d="M38.97,10h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H38.97a.692.692,0,0,1-.691-.691V10.691A.692.692,0,0,1,38.97,10ZM10.691,30.482H15.03a.692.692,0,0,1,.691.691V43.309A.692.692,0,0,1,15.03,44H10.691A.692.692,0,0,1,10,43.309V31.173A.692.692,0,0,1,10.691,30.482Zm9.426-6.827h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H20.117a.692.692,0,0,1-.691-.691V24.346A.692.692,0,0,1,20.117,23.655Zm9.426-6.827h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H29.544a.692.692,0,0,1-.691-.691V17.518a.692.692,0,0,1,.691-.691Z"
            fill="#3d3d3d"
            fill-rule="evenodd"
          />
        </g>
      </svg>
      <span class="text-primary h5 p-0 m-0 pt-1 me-2">سهلة</span>
    </div>
    <div class="d-flex align-items-center text-start">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style="width: 20px; height: 20px"
        width="34"
        height="34"
        viewBox="0 0 34 34"
      >
        <path
          id="icons8_clock"
          d="M17,0A17,17,0,1,0,34,17,17,17,0,0,0,17,0Zm0,2.833A14.167,14.167,0,1,1,2.833,17,14.166,14.166,0,0,1,17,2.833ZM15.495,5.49l-.62,11.6.133,1.24,8.721,7.7L25.1,24.615l-7.216-7.659L17.266,5.49Z"
          fill="#3d3d3d"
        />
      </svg>
      <span class="text-primary h5 p-0 m-0 pt-1 me-2">23 ث</span>
    </div>
  </div>
</div>
</div>`,
        `<div class="video-item">
<div class="img-wrap mb-3 position-relative">
  <iframe
    width="100%"
    height="250"
    src="https://www.youtube.com/embed/hQ_xMX05B5o"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</div>
<div class="content px-3 pb-3">
  <h5 class="w-100 text-center pb-3 d-block">
    سموثي التمر والموز
  </h5>
  <div
    class="p-2 d-flex w-100 mt-4 align-items-center justify-content-between"
  >
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style="width: 20px; height: 20px"
        width="34"
        height="34"
        viewBox="0 0 34 34"
      >
        <g id="svgexport-9" transform="translate(-10 -10)">
          <path
            id="Path_5709"
            data-name="Path 5709"
            d="M38.97,10h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H38.97a.692.692,0,0,1-.691-.691V10.691A.692.692,0,0,1,38.97,10ZM10.691,30.482H15.03a.692.692,0,0,1,.691.691V43.309A.692.692,0,0,1,15.03,44H10.691A.692.692,0,0,1,10,43.309V31.173A.692.692,0,0,1,10.691,30.482Zm9.426-6.827h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H20.117a.692.692,0,0,1-.691-.691V24.346A.692.692,0,0,1,20.117,23.655Zm9.426-6.827h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H29.544a.692.692,0,0,1-.691-.691V17.518a.692.692,0,0,1,.691-.691Z"
            fill="#3d3d3d"
            fill-rule="evenodd"
          />
        </g>
      </svg>
      <span class="text-primary h5 p-0 m-0 pt-1 me-2">سهلة</span>
    </div>
    <div class="d-flex align-items-center text-start">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style="width: 20px; height: 20px"
        width="34"
        height="34"
        viewBox="0 0 34 34"
      >
        <path
          id="icons8_clock"
          d="M17,0A17,17,0,1,0,34,17,17,17,0,0,0,17,0Zm0,2.833A14.167,14.167,0,1,1,2.833,17,14.166,14.166,0,0,1,17,2.833ZM15.495,5.49l-.62,11.6.133,1.24,8.721,7.7L25.1,24.615l-7.216-7.659L17.266,5.49Z"
          fill="#3d3d3d"
        />
      </svg>
      <span class="text-primary h5 p-0 m-0 pt-1 me-2">12 ث</span>
    </div>
  </div>
</div>
</div>`,
        `<div class="video-item">
<div class="img-wrap mb-3 position-relative">
  <iframe
    width="100%"
    height="250"
    src="https://www.youtube.com/embed/LH30ETL6smg"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</div>
<div class="content px-3 pb-3">
  <h5 class="w-100 text-center pb-3 d-block">
    كرات الجبنة بالتمر
  </h5>
  <div
    class="p-2 d-flex w-100 mt-4 align-items-center justify-content-between"
  >
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style="width: 20px; height: 20px"
        width="34"
        height="34"
        viewBox="0 0 34 34"
      >
        <g id="svgexport-9" transform="translate(-10 -10)">
          <path
            id="Path_5709"
            data-name="Path 5709"
            d="M38.97,10h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H38.97a.692.692,0,0,1-.691-.691V10.691A.692.692,0,0,1,38.97,10ZM10.691,30.482H15.03a.692.692,0,0,1,.691.691V43.309A.692.692,0,0,1,15.03,44H10.691A.692.692,0,0,1,10,43.309V31.173A.692.692,0,0,1,10.691,30.482Zm9.426-6.827h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H20.117a.692.692,0,0,1-.691-.691V24.346A.692.692,0,0,1,20.117,23.655Zm9.426-6.827h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H29.544a.692.692,0,0,1-.691-.691V17.518a.692.692,0,0,1,.691-.691Z"
            fill="#3d3d3d"
            fill-rule="evenodd"
          />
        </g>
      </svg>
      <span class="text-primary h5 p-0 m-0 pt-1 me-2">سهلة</span>
    </div>
    <div class="d-flex align-items-center text-start">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style="width: 20px; height: 20px"
        width="34"
        height="34"
        viewBox="0 0 34 34"
      >
        <path
          id="icons8_clock"
          d="M17,0A17,17,0,1,0,34,17,17,17,0,0,0,17,0Zm0,2.833A14.167,14.167,0,1,1,2.833,17,14.166,14.166,0,0,1,17,2.833ZM15.495,5.49l-.62,11.6.133,1.24,8.721,7.7L25.1,24.615l-7.216-7.659L17.266,5.49Z"
          fill="#3d3d3d"
        />
      </svg>
      <span class="text-primary h5 p-0 m-0 pt-1 me-2">15 ث</span>
    </div>
  </div>
</div>
</div>`,
        `      <div class="video-item">
<div class="img-wrap mb-3 position-relative">
  <iframe
    width="100%"
    height="250"
    src="https://www.youtube.com/embed/0IkqHMji6n8"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</div>
<div class="content px-3 pb-3">
  <h5 class="w-100 text-center pb-3 d-block">موسلي بالتمر</h5>
  <div
    class="p-2 d-flex w-100 mt-4 align-items-center justify-content-between"
  >
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style="width: 20px; height: 20px"
        width="34"
        height="34"
        viewBox="0 0 34 34"
      >
        <g id="svgexport-9" transform="translate(-10 -10)">
          <path
            id="Path_5709"
            data-name="Path 5709"
            d="M38.97,10h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H38.97a.692.692,0,0,1-.691-.691V10.691A.692.692,0,0,1,38.97,10ZM10.691,30.482H15.03a.692.692,0,0,1,.691.691V43.309A.692.692,0,0,1,15.03,44H10.691A.692.692,0,0,1,10,43.309V31.173A.692.692,0,0,1,10.691,30.482Zm9.426-6.827h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H20.117a.692.692,0,0,1-.691-.691V24.346A.692.692,0,0,1,20.117,23.655Zm9.426-6.827h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H29.544a.692.692,0,0,1-.691-.691V17.518a.692.692,0,0,1,.691-.691Z"
            fill="#3d3d3d"
            fill-rule="evenodd"
          />
        </g>
      </svg>
      <span class="text-primary h5 p-0 m-0 pt-1 me-2">سهلة</span>
    </div>
    <div class="d-flex align-items-center text-start">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style="width: 20px; height: 20px"
        width="34"
        height="34"
        viewBox="0 0 34 34"
      >
        <path
          id="icons8_clock"
          d="M17,0A17,17,0,1,0,34,17,17,17,0,0,0,17,0Zm0,2.833A14.167,14.167,0,1,1,2.833,17,14.166,14.166,0,0,1,17,2.833ZM15.495,5.49l-.62,11.6.133,1.24,8.721,7.7L25.1,24.615l-7.216-7.659L17.266,5.49Z"
          fill="#3d3d3d"
        />
      </svg>
      <span class="text-primary h5 p-0 m-0 pt-1 me-2">20 ث</span>
    </div>
  </div>
</div>
</div>`,
        `<div class="video-item">
<div class="img-wrap mb-3 position-relative">
  <iframe
    width="100%"
    height="250"
    src="https://www.youtube.com/embed/gqOc2xFPoFs"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</div>
<div class="content px-3 pb-3">
  <h5 class="w-100 text-center pb-3 d-block">
    آيسكريم الفانيلا مع قطع التمر والدبس
  </h5>
  <div
    class="p-2 d-flex w-100 mt-4 align-items-center justify-content-between"
  >
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style="width: 20px; height: 20px"
        width="34"
        height="34"
        viewBox="0 0 34 34"
      >
        <g id="svgexport-9" transform="translate(-10 -10)">
          <path
            id="Path_5709"
            data-name="Path 5709"
            d="M38.97,10h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H38.97a.692.692,0,0,1-.691-.691V10.691A.692.692,0,0,1,38.97,10ZM10.691,30.482H15.03a.692.692,0,0,1,.691.691V43.309A.692.692,0,0,1,15.03,44H10.691A.692.692,0,0,1,10,43.309V31.173A.692.692,0,0,1,10.691,30.482Zm9.426-6.827h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H20.117a.692.692,0,0,1-.691-.691V24.346A.692.692,0,0,1,20.117,23.655Zm9.426-6.827h4.339a.692.692,0,0,1,.691.691V43.309a.692.692,0,0,1-.691.691H29.544a.692.692,0,0,1-.691-.691V17.518a.692.692,0,0,1,.691-.691Z"
            fill="#3d3d3d"
            fill-rule="evenodd"
          />
        </g>
      </svg>
      <span class="text-primary h5 p-0 m-0 pt-1 me-2">سهلة</span>
    </div>
    <div class="d-flex align-items-center text-start">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style="width: 20px; height: 20px"
        width="34"
        height="34"
        viewBox="0 0 34 34"
      >
        <path
          id="icons8_clock"
          d="M17,0A17,17,0,1,0,34,17,17,17,0,0,0,17,0Zm0,2.833A14.167,14.167,0,1,1,2.833,17,14.166,14.166,0,0,1,17,2.833ZM15.495,5.49l-.62,11.6.133,1.24,8.721,7.7L25.1,24.615l-7.216-7.659L17.266,5.49Z"
          fill="#3d3d3d"
        />
      </svg>
      <span class="text-primary h5 p-0 m-0 pt-1 me-2">11 ث</span>
    </div>
  </div>
</div>
</div>`,
      ];

      for (var i = 1; i < 20; i++) {
        result.push(``);
      }

      return result;
    })();

 
    window.addEventListener('resize',function(event)
    {

    },true);



    if(window.innerWidth > 1300){
      var x =4
    }
    else if(window.innerWidth > 1100){
      var x =3
    }
    else if(window.innerWidth > 800){
      var x =2
    }
    else{
      var x=1
    }


    var options = {
      pageSize: x,

      dataSource: sources,
      showPageNumbers: false,
      callback: function (response, pagination) {
        window.console && console.log(response, pagination);

        var dataHtml = "<ul>";

        $.each(response, function (index, item) {
          dataHtml += "<li>" + item + "</li>";
        });

        dataHtml += "</ul>";

        container.prev().html(dataHtml);
      },
    };

    //$.pagination(container, options);

    container.addHook("beforeInit", function () {
      window.console && console.log("beforeInit...");
    });
    container.pagination(options);

    container.addHook("beforePageOnClick", function () {
      window.console && console.log("beforePageOnClick...");
      //return false
    });
  })("demo1");
});
});
