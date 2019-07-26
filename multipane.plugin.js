//META{"name":"Multipane"}*//

function MultiPaneOnMouseEnter(){
    let wrapper = document.createElement('div');
    let buttonLeft = parseInt(document.getElementsByName('MultiPane')[0].getBoundingClientRect().left) - 36;
    let buttonTop = parseInt(document.getElementsByName('MultiPane')[0].getBoundingClientRect().top) + 25;
    wrapper.innerHTML = `<div class='layer-v9HyYc da-layer MultiPaneIcon' style='left: ` + buttonLeft.toString() + `px; top: ` + buttonTop.toString() + `px;'><div class="tooltip-2QfLtc tooltipBottom-3ARrEK tooltipBlack-PPG47z"><div class="tooltipPointer-3ZfirK da-tooltipPointer"></div>Seperate</div></div>`;
    document.querySelector('.layerContainer-yqaFcK').appendChild(wrapper.firstChild);
};

function MultiPaneOnMouseLeave(){
    document.querySelector('.MultiPaneIcon').remove();
};

function MultiPaneOnMouseClick(){
    console.log('Woo')
};

const MultiPaneInjectHTML = function injectHTML(icon){
    let wrapper = document.createElement('div');

    if(icon && !document.getElementsByName("MultiPane")[0]){
        wrapper.innerHTML = `<div tabindex="0" class="iconWrapper-2OrFZ1 da-iconWrapper clickable-3rdHwn da-clickable" role="button">
            <svg class="icon-22AiRD da-icon" name="MultiPane" width="16" height="16" viewBox="-8 -8 80 80" fill = "currentColor">
                <g>
                    <g>
                        <g>
                            <polygon points="30,56 8,56 8,11 30,11 25,3 0,3 0,64 25,64"/>
                        </g>
                    </g>
                    <g>
                        <g>
                            <polygon points="34,19 26,19 26,29.5 15.5,29.5 15.5,37.5 26,37.5 26,48 34,48 34,37.5 44.5,37.5 44.5,29.5 34,29.5"/>
                        </g>
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
