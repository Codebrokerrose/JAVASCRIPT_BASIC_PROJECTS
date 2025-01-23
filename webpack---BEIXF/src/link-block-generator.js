export function linkBlockGeneratorComponent(BELinkBlockGenerator) {
    BELinkBlockGenerator.MAXIMUM_HEADLINE_LENGTH = 100;
    BELinkBlockGenerator.MAXIMUM_DESC_LENGTH = 200;

    BELinkBlockGenerator.IND_LINK_BLOCK_TYPE_URL_TYPE = 0;
    BELinkBlockGenerator.IND_LINK_BLOCK_TYPE_HEADLINE_TYPE = 1;
    BELinkBlockGenerator.IND_LINK_BLOCK_TYPE_DESCRIPTION_TYPE = 2;
    BELinkBlockGenerator.IND_LINK_BLOCK_TYPE_IMAGE_TYPE = 3;

    BELinkBlockGenerator.REPLACEMENT_STRATEGY_OVERWRITE = 0;
    BELinkBlockGenerator.REPLACEMENT_STRATEGY_POST_APPEND_ELEMENT = 1;
    BELinkBlockGenerator.REPLACEMENT_STRATEGY_PRE_APPEND_ELEMENT = 2;
    BELinkBlockGenerator.REPLACEMENT_STRATEGY_PRE_APPEND_PARENT = 3;

    BELinkBlockGenerator.setMaximumHeadlineLength = function(length) {
        BELinkBlockGenerator.MAXIMUM_HEADLINE_LENGTH = length;
    };

    BELinkBlockGenerator.setMaximumDescriptionLength = function(length) {
        BELinkBlockGenerator.MAXIMUM_DESC_LENGTH = length;
    };

    BELinkBlockGenerator.generateIndividualLinks = function(parentElement, linkStructure, link) {
        let link_level_element_tag = linkStructure[0];
        let link_level_element = document.createElement(link_level_element_tag);
        let link_attribute_dictionary = linkStructure[1];
        let allowable_elements = linkStructure[2];
        let children_link_structures = linkStructure[3];
        for (let link_attribute_key in link_attribute_dictionary) {
            link_level_element.setAttribute(link_attribute_key, link_attribute_dictionary[link_attribute_key]);
        }

        let added_something = false;
        if (allowable_elements.indexOf(BELinkBlockGenerator.IND_LINK_BLOCK_TYPE_URL_TYPE) >= 0) {
            link_level_element.setAttribute('href', link.url);
            added_something = true;
        }
        if (allowable_elements.indexOf(BELinkBlockGenerator.IND_LINK_BLOCK_TYPE_HEADLINE_TYPE) >= 0 && link.h1) {
            let headline_text = link.h1;
            if (headline_text.length > BELinkBlockGenerator.MAXIMUM_HEADLINE_LENGTH) {
                headline_text = headline_text.substring(0, BELinkBlockGenerator.MAXIMUM_HEADLINE_LENGTH) + '...';
            }
            let text_node = document.createTextNode(headline_text);
            link_level_element.appendChild(text_node);
            added_something = true;
        }
        if (allowable_elements.indexOf(BELinkBlockGenerator.IND_LINK_BLOCK_TYPE_DESCRIPTION_TYPE) >= 0 && link.desc) {
            let desc_text = link.desc;
            if (desc_text.length > BELinkBlockGenerator.MAXIMUM_DESC_LENGTH) {}

            let text_node = document.createTextNode(desc_text);
            link_level_element.appendChild(text_node);
            added_something = true;
        }
        if (allowable_elements.indexOf(BELinkBlockGenerator.IND_LINK_BLOCK_TYPE_IMAGE_TYPE) >= 0 && link.image) {

            link_level_element.setAttribute('src', link.image);
            added_something = true;
        }
        // don't emit for empty links, desc, headline, image
        // except for parent structures where allowable_length=0
        if (!added_something && allowable_elements.length !== 0) {
            return;
        }
        // go depth first
        for (let childrenIndex = 0; childrenIndex < children_link_structures.length; childrenIndex++) {
            let childLinkStructure = children_link_structures[childrenIndex];
            BELinkBlockGenerator.generateIndividualLinks(link_level_element, childLinkStructure, link);
        }
        parentElement.appendChild(link_level_element);
    };

    BELinkBlockGenerator.insertLinkBlocks = function(targetElement, replacementStrategy, overallStructure, linkStructure, links,
        titleStructure) {
        if (targetElement == null) {
            return;
        }

        if (replacementStrategy === BELinkBlockGenerator.REPLACEMENT_STRATEGY_OVERWRITE) {
            while (targetElement.firstChild) {
                targetElement.removeChild(targetElement.firstChild);
            }
        }

        let previousElement = targetElement;
        for (let i = 0; i < overallStructure.length; i++) {
            let level_definition = overallStructure[i];
            let level_element_tag = level_definition[0]
            let level_element = document.createElement(level_element_tag);
            let attribute_dictionary = level_definition[1];
            for (let attribute_key in attribute_dictionary) {
                level_element.setAttribute(attribute_key, attribute_dictionary[attribute_key]);
            }

            // need to place title structure
            if (titleStructure && titleStructure[0] === i) {
                let title_element_tag = titleStructure[1];
                let title_element = document.createElement(title_element_tag);
                let title_attribute_dictionary = titleStructure[2];
                let title_text_content = titleStructure[3];
                for (let title_attribute_key in title_attribute_dictionary) {
                    title_element.setAttribute(title_attribute_key, title_attribute_dictionary[title_attribute_key]);
                }

                let title_text_node = document.createTextNode(title_text_content);
                title_element.appendChild(title_text_node);


                level_element.appendChild(title_element);
            }

            // last level place links
            if (i === overallStructure.length - 1) {
                for (let link_i = 0; link_i < links.length; link_i++) {
                    let link = links[link_i];
                    for (let linkStructureIndex = 0; linkStructureIndex < linkStructure.length; linkStructureIndex++) {
                        BELinkBlockGenerator.generateIndividualLinks(level_element, linkStructure[linkStructureIndex], link)
                    }
                }
            }

            // first level child we need to check placement
            if (previousElement === targetElement) {
                if (replacementStrategy === BELinkBlockGenerator.REPLACEMENT_STRATEGY_PRE_APPEND_ELEMENT) {
                    // 2 means insert right before
                    previousElement.insertBefore(level_element, targetElement.firstChild);
                } else if (replacementStrategy === BELinkBlockGenerator.REPLACEMENT_STRATEGY_PRE_APPEND_PARENT) {
                    // 3 means insert right before at parent level
                    let parentElement = previousElement.parentElement;
                    parentElement.insertBefore(level_element, previousElement);
                } else {
                    previousElement.appendChild(level_element);
                }
            } else {
                previousElement.appendChild(level_element);
            }
            previousElement = level_element;
        }
    }
}