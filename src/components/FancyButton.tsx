import * as React from 'react';
import './FancyButton.scss';

/**
 * Interface defining the Properties of the Fancy Button
 *
 * @interface FancyButtonProps
 */
interface FancyButtonProps {
    label: string,
    collapsedLabel?: string
}


/**
 * Fancy (Collapsible) Button
 * @param props Properties
 */
export const FancyButton: React.FC<FancyButtonProps> = (props) => {

    const [ isCollapsed, setCollapsed ] = React.useState<boolean>(true);

    /**
     * Determine the text of the button based on the supplied Properies and the Collapsed State
     */
    const buttonLabel = () => {

        if (props.collapsedLabel === undefined || 
            props.collapsedLabel === null || 
            props.collapsedLabel.trim().length === 0 ||
            !isCollapsed
            ) {
            return props.label;
        }
        else {
            return props.collapsedLabel;
        }

    }

    /**
     * Modify the Collapsed State when the Button is Clicked
     */
    const onButtonClick = () => {
        setCollapsed(!isCollapsed);
    }


    return (

        <div className="fancy-button">
            <button onClick={onButtonClick}>{buttonLabel()}</button>
            {!isCollapsed &&
                <div className="fancy-button-content">
                    {props.children}
                </div>
            }
        </div>
        
    )
}
