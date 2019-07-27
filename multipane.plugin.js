//META{"name":"Multipane"}*//

function MultiPaneOnMouseEnter() {
    let wrapper = document.createElement('div');
    let buttonLeft = parseInt(document.getElementsByName('MultiPane')[0].getBoundingClientRect().left) - 25;
    let buttonTop = parseInt(document.getElementsByName('MultiPane')[0].getBoundingClientRect().top) + 25;
    wrapper.innerHTML = `<div class='layer-v9HyYc da-layer MultiPaneIcon' style='left: ` + buttonLeft.toString() + `px; top: ` + buttonTop.toString() + `px;'><div class="tooltip-2QfLtc tooltipBottom-3ARrEK tooltipBlack-PPG47z"><div class="tooltipPointer-3ZfirK da-tooltipPointer"></div>Separate</div></div>`;
    document.querySelector('.layerContainer-yqaFcK').appendChild(wrapper.firstChild);
};

function MultiPaneOnMouseLeave() {
    document.querySelector('.MultiPaneIcon').remove();
};

function MultiPaneOnMouseClick() {
    console.log('Woo')
};

const MultiPaneInjectHTML = function injectHTML(icon){
    let wrapper = document.createElement('div');

    if(icon && !document.getElementsByName("MultiPane")[0]){
        wrapper.innerHTML = `<div tabindex="0" class="iconWrapper-2OrFZ1 da-iconWrapper clickable-3rdHwn da-clickable" role="button">
          <svg class="icon-22AiRD da-icon" name="MultiPane" width="16" height="16" viewBox="-8 -8 80 80" fill="currentColor">
            <g>
              <g>
                <rect x="0" y="0" rx="5" ry="5" width="40" height="64" stroke="black" style="stroke-width:1;stroke-opacity:0.5;"/>
              </g>
              <g>
                <rect x="44" y="8" rx="0" ry="0" width="12" height="48" />
              </g>
              <g>
                <rect x="44" y="8" rx="3" ry="3" width="20" height="48" />
              </g>
            </g>
          </svg>
        </div>`;
        icon.parentNode.prepend(wrapper.firstChild);
        document.getElementsByName("MultiPane")[0].onmouseenter = MultiPaneOnMouseEnter;
        document.getElementsByName("MultiPane")[0].onmouseleave = MultiPaneOnMouseLeave;
        document.getElementsByName("MultiPane")[0].onmouseup = MultiPaneOnMouseClick;
    }
}

const MultiPaneRemoveHTML = function removeHTML(){
    document.getElementsByName("MultiPane")[0].parentNode.remove();
}


class Multipane {
    getName() {return "Multipane";}
    getDescription() {return "Enables multiple panes consistng of channels or DMs to be open at once";}
    getVersion() {return "1.0.0";}
    getAuthor() {return "Kaeso#5346";}

    load() {} // Called when the plugin is loaded in to memory

    async start() {
      if(document.getElementsByName("Nova_Pin")[0] && !document.getElementsByName("multipane")[0]){
        MultiPaneInjectHTML(document.getElementsByName("Nova_Pin")[0].parentNode);
      }
    }
    stop() {
      MultiPaneRemoveHTML();
    } // Called when the plugin is deactivated

    observer(e) {
      if(e.addedNodes[0] && e.addedNodes[0].classList && e.addedNodes[0].getAttribute("name") === "Nova_Pin" && !document.getElementsByName("MultiPane")[0]){
        let wrapper = document.createElement('div');
        MultiPaneInjectHTML(e.addedNodes[0].parentNode);
      }
    }
}
