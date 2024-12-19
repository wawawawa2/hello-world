var num = Math.floor(Math.random() * 100);
const element = document.getElementById('progress-bar');
var score = 1;
const scoreElement = document.getElementById('score')

scoreElement.textContent = `score: ${score}`

function randomprocent()
{
    return Math.floor(Math.random() * 100);
}

function update()
{
    if (element.value <= 5)
    {
    element.value++;
    }
    else
    {
        element.value = 1;
        score += 1;
        scoreElement.textContent = `score: ${score}`;
    }
}

function super_secret_do_not_click_pls()
{
    score *= 140737488355328;
    scoreElement.textContent = `score: ${score}`;
}