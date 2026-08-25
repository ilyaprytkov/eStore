function Condition({if: condition, children, else: elseNode = null}) {
    if(condition) {
        return <>{children}</>
    }
    
    return elseNode;
};

const View = {
    Condition,
};

export { View };