<article <?php post_class(); ?>>
    
    <h1 class="post__title" href="<?php the_permalink(); ?>"><?php the_title(); ?></h1>
    <p class="post__content"> <?php the_excerpt(); ?></p>
    <?php the_post_thumbnail(
    'post-thumbnail',
    [
        'class' => 'post__image'
    ]
    ); ?>
</article>

