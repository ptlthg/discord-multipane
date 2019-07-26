//META{"name":"Multipane"}*//

function MultiPaneOnMouseEnter(){
    let wrapper = document.createElement('div');
    let buttonLeft = parseInt(document.getElementsByName('MultiPane')[0].getBoundingClientRect().left) - 36;
    let buttonTop = parseInt(document.getElementsByName('MultiPane')[0].getBoundingClientRect().top) + 25;
    wrapper.innerHTML = `<div class='layer-v9HyYc da-layer MultiPaneIcon' style='left: ` + buttonLeft.toString() + `px; top: ` + buttonTop.toString() + `px;'><div class="tooltip-2QfLtc tooltipBottom-3ARrEK tooltipBlack-PPG47z"><div class="tooltipPointer-3ZfirK da-tooltipPointer"></div>Popout Chat</div></div>`;
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
                            <polygon points="53,56 8,56 8,11 30,11 30,3 0,3 0,64 61,64 61,34 53,34"/>
                        </g>
                    </g>
                    <g>
                        <g>
                            <polygon points="42,0 50,8 33,25 39,31 56,14 64,23 64,0"/>
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

    start() {
      if(document.getElementsByName("Nova_Pin")[0] && !document.getElementsByName("multipane")[0]){
          MultiPaneInjectHTML(document.getElementsByName("Nova_Pin")[0].parentNode);
      }
    }
    stop() {} // Called when the plugin is deactivated

    observer(changes) {} // Observer for the `document`. Better documentation than I can provide is found here: <https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver>
}
