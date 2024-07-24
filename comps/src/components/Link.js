import classNames from "classnames";
import useNavigation from "../hooks/use-navigation";

function Link({ to, children, className, activeClassName }) {
    const { navigate, currentPath } = useNavigation();

    const classes = classNames('text-blue-500 mr-2', 
        className,
        // This make a condition when user to on Dropdown sidebar it apply side underline to it
        currentPath === to && activeClassName
    );

    const handleClick = (event) => {
        // This condition is allow user to open New Tap
        if (event.metaKey || event.ctrlKey) {
            return;
        }
        event.preventDefault();

        navigate(to);
    };

    return <a className={classes} href={to} onClick={handleClick}>{children}</a>
}

export default Link;