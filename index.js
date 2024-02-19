// 1. Типы данных
// Basic
function getLength(value) {
  if (typeof value === "string" || Array.isArray(value)) {
    return value.length;
  } else if (value && typeof value === "object" && "length" in value) {
    return value.length;
  } else {
    return 0;
  }
}


// Advanced
const tree1 = {
  value: 1,
  left: {value: 2, left: undefined, right: undefined},
  right: {value: 3, left: undefined, right: undefined},
};
const tree2 = {
  value: 1,
  left: {value: 2, left: undefined, right: undefined},
  right: {value: 3, left: undefined, right: undefined},
};

function compare(node1, node2) {
  if (!node1 && !node2) {
    return true;
  }
  if (!node1 || !node2) {
    return false;
  }

  if (node1.value !== node2.value) {
    return false;
  }
  return compare(node1.left, node2.left) && compare(node1.right, node2.right);
}


